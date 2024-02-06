# frozen_string_literal: true

class ApplicationComponent < ViewComponent::Base
  def initialize( controller: nil, **options)
    @component_name = self.class.name.underscore.dasherize.gsub('/', '--')
    @controller = @component_name + ' ' + controller.to_s
    @options = options.to_json
  end
end
