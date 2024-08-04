# frozen_string_literal: true

class Libs::Editor::EditorjsComponent < ApplicationComponent
  erb_template <<-ERB
    <<%= @tag %> class="hidden" data-controller="<%= @controllers %>" data-<%= @controller_name %>-params-value="<%= @params %>">
      <div data-<%= @controller_name %>-target="editor">
        <%= content %>
      </div>
    </<%= @tag %>>
  ERB

  def initialize(controller: nil, tag: :form, data: nil, **params)
    super
  end
end
