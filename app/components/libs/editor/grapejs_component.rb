# frozen_string_literal: true

class Libs::Editor::GrapejsComponent < ApplicationComponent
  erb_template <<-ERB
    <link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet">
    <script src="https://unpkg.com/grapesjs@0.14.49/dist/grapes.js"></script>
    <script type="text/javascript">
        window.grapesjs = grapesjs
    </script>
    <<%= @tag %> class="hidden" data-controller="<%= @controllers %>" data-<%= @controller_name %>-params-value="<%= @params %>">
      <div data-<%= @controller_name %>-target="editor"></div>
    </<%= @tag %>>
  ERB
end
