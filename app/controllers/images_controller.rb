class ImagesController < ApplicationController

  # For EditorJS
  def editorjs_upload_by_file
    record_class = params[:record_class].camelize.constantize
    record = record_class.find_or_create_by(id: params[:record_id])
    file = params[:image].tempfile
    file_name = params[:image].original_filename
    content_type = params[:image].content_type
    if record.images.attach(io: file, filename: file_name, content_type: content_type)
      image = record.images.last
      render json: { success: 1, file: { url: rails_blob_url(image) } }
    end
  end

  # For EditorJS
  def editorjs_upload_by_url
  end
  
end
