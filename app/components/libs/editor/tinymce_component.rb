# frozen_string_literal: true

class Libs::Editor::TinymceComponent < ApplicationComponent
  erb_template <<-ERB
    <<%= @tag %> id="demo" class="hidden" data-controller="<%= @controllers %>" data-<%= @controller_name %>-params-value="<%= @params %>">
      <div data-<%= @controller_name %>-target="editor">
        <h1>Hello World Component!</h1>
      </div>
    </<%= @tag %>>
  ERB
end
