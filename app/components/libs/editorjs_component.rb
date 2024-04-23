# frozen_string_literal: true

class Libs::EditorjsComponent < ApplicationComponent

  erb_template <<-ERB
    <form data-controller="utilities--editorjs" data-utilities--editorjs-object-id-value='<%= @object_id %>' data-utilities--editorjs-object-type-value="<%= @object_type %>" data-utilities--editorjs-image-endpoint-by-file-value="<%= @image_endpoint_by_file %>" data-utilities--editorjs-image-endpoint-by-url-value="<%= @image_endpoint_by_url %>" class="flex flex-col">
      <div id="<%= @holder %>" data-utilities--editorjs-target="editor"></div>
    </form>
  ERB

  def initialize(
    holder: "editorjs-#{SecureRandom.alphanumeric}",
    object_id: nil,
    object_type:,
    image_endpoint_by_file: 'http://192.168.1.12:3000/images/upload_by_file',
    image_endpoint_by_url: 'http://192.168.1.12:3000/images/upload_by_url'
  )
    @holder = holder
    @object_id = object_id
    @object_type = object_type
    @image_endpoint_by_file = image_endpoint_by_file
    @image_endpoint_by_url = image_endpoint_by_url
  end
end
