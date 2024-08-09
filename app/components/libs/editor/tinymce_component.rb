# frozen_string_literal: true

class Libs::Editor::TinymceComponent < ApplicationComponent

  erb_template <<-ERB
    <script src="<%= @tinymce_url %>" referrerpolicy="origin"></script>
    <<%= @tag %> class="hidden" data-controller="<%= @controllers %>" data-<%= @controller_name %>-params-value="<%= @params %>">
      <div data-<%= @controller_name %>-target="editor" id="editor"></div>
    </<%= @tag %>>
  ERB

  def initialize(controller: nil, tag: :div, data: nil, tinymce_url: TINYMCE_URL, **params)
    @tinymce_url = tinymce_url
    super
  end
end
