# frozen_string_literal: true

class Editor::EditorjsComponent < ViewComponent::Base
  def initialize(holder: "editorjs-#{SecureRandom.alphanumeric}", object_id: nil, object_type:, image_endpoint_by_file: 'http://192.168.1.12:3000/images/upload_by_file', image_endpoint_by_url: 'http://192.168.1.12:3000/images/upload_by_url')
    @holder = holder
    @object_id = object_id
    @object_type = object_type
    @image_endpoint_by_file = image_endpoint_by_file
    @image_endpoint_by_url = image_endpoint_by_url
  end
end
