# frozen_string_literal: true

class ApplicationComponent < ViewComponent::Base
  include ApplicationHelper
  
  erb_template <<-ERB
    <<%= @tag %> class="hidden" data-controller="<%= @controllers %>" data-<%= @controller_name %>-options-value="<%= @options %>">
      <%= content %>
    </<%= @tag %>>
  ERB

  def initialize(controller: nil, tag: :div, **options)
    @tag = tag
    @component_name = self.class.name.underscore.dasherize.gsub('/', '--')
    @controller_name = @component_name.gsub('-component', '')
    @controllers = @controller_name + ' ' + controller.to_s
    @options = options.to_json
  end
end
