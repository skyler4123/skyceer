class ImagesController < ApplicationController
  def upload_by_file
    object_class = params[:object_type].camelize.constantize
    object = object_class.find_or_create_by(id: params[:object_id])
    file = params[:image].tempfile
    file_name = params[:image].original_filename
    content_type = params[:image].content_type
    image = object.images.attach(io: file, filename: file_name, content_type: content_type)
    if image
      render json: {success: 1, file: { url:  }}
    end
  end

  def upload_by_url
  end
end
