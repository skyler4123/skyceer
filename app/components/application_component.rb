# frozen_string_literal: true

class ApplicationComponent < ViewComponent::Base
  def initialize( controller: nil, **options)
    @component_name = self.class.name.underscore.dasherize
    @controller = @component_name + ' ' + controller.to_s
    @options = options.to_json
  end
end
