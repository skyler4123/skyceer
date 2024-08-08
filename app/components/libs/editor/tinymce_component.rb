# frozen_string_literal: true

class Libs::Editor::TinymceComponent < ApplicationComponent

  erb_template <<-ERB
    <script src="#{TINYMCE_URL}" referrerpolicy="origin"></script>
    <<%= @tag %> class="hidden" data-controller="<%= @controllers %>" data-<%= @controller_name %>-params-value="<%= @params %>">
      <div data-<%= @controller_name %>-target="editor" id="editor"></div>
    </<%= @tag %>>
  ERB
end
