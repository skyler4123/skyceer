# frozen_string_literal: true

class Libs::EditorjsComponent < ApplicationComponent

  erb_template <<-ERB
    <<%= @tag %> class="hidden" data-controller="<%= @controllers %>" data-<%= @controller_name %>-params-value="<%= @params %>">
      <div data-<%= @controller_name %>-target="holder">
      <%= content %>
    </div>
    </<%= @tag %>>
  ERB

  # def initialize(
  #   holder: "editorjs-#{SecureRandom.alphanumeric}",
  #   record_id: nil,
  #   record_class:,
  #   image_endpoint_by_file: 'http://192.168.1.12:3000/images/upload_by_file',
  #   image_endpoint_by_url: 'http://192.168.1.12:3000/images/upload_by_url'
  # )
  #   @holder = holder
  #   @object_id = object_id
  #   @object_type = object_type
  #   @image_endpoint_by_file = image_endpoint_by_file
  #   @image_endpoint_by_url = image_endpoint_by_url
  # end
  def initialize(controller: nil, tag: :form, **params)
    super
  end
end
