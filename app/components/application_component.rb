# frozen_string_literal: true

class ApplicationComponent < ViewComponent::Base
  include ApplicationHelper
  
  erb_template <<-ERB
    <<%= @tag %> class="hidden" data-controller="<%= @controllers %>" <%= @data %> data-<%= @controller_name %>-params-value="<%= @params %>">
      <%= content %>
    </<%= @tag %>>
  ERB

  def initialize(controller: nil, tag: :div, data: nil, **params)
    @tag = tag
    @component_name = self.class.name.underscore.dasherize.gsub('/', '--')
    @controller_name = @component_name.gsub('-component', '')
    @controllers = (@controller_name + ' ' + controller.to_s).strip
    @params = params.to_json
    if data
      @data = ''
      data.each do |key, value|
        @data += " data-#{key}=#{value}"
      end
      @data = @data.strip
    end
  end
end
