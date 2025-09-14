# app/controllers/images_controller.rb
class ImagesController < ApplicationController
  # For EditorJS
  def editorjs_upload_by_file
    service = ImageUploadService.new(
      params[:record_class],
      params[:record_id],
      params[:image]
    )
    
    result = service.upload
    
    if result[:success] == 1
      render json: result
    else
      render json: result, status: :bad_request
    end
  end

  # For EditorJS
  def editorjs_upload_by_url
    render json: { success: 0, error: "URL upload not implemented" }
  end
end
