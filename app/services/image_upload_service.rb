# app/services/image_upload_service.rb
class ImageUploadService
  ALLOWED_MODELS = {
    'article_post' => ArticlePost,
    'user' => User
  }.freeze

  def initialize(record_class_param, record_id, image_file)
    @record_class_param = record_class_param
    @record_id = record_id
    @image_file = image_file
    @errors = []
  end

  def upload
    return failure_response unless valid?
    
    begin
      record = find_or_create_record
      attach_image(record)
    rescue => e
      Rails.logger.error "Image upload error: #{e.message}"
      failure_response("Upload failed")
    end
  end

  private

  def valid?
    validate_record_class
    validate_record_id
    validate_image_file
    @errors.empty?
  end

  def validate_record_class
    @record_class = ALLOWED_MODELS[@record_class_param&.downcase&.strip]
    @errors << "Invalid record class" unless @record_class
  end

  def validate_record_id
    @errors << "Record ID required" unless @record_id.present?
  end

  def validate_image_file
    @errors << "Image file required" unless @image_file.respond_to?(:tempfile)
  end

  def find_or_create_record
    @record_class.find_or_create_by(id: @record_id)
  end

  def attach_image(record)
    if record.image_in_article_post_attachment.attach(
      io: @image_file.tempfile,
      filename: @image_file.original_filename,
      content_type: @image_file.content_type
    )
      image = record.image_in_article_post_attachment.last
      { success: 1, file: { url: Rails.application.routes.url_helpers.rails_blob_url(image) } }
    else
      failure_response("Failed to attach image")
    end
  end

  def failure_response(message = nil)
    error_message = message || @errors.join(", ")
    { success: 0, error: error_message }
  end
end
