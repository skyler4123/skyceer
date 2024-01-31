# frozen_string_literal: true

class RatioComponent < ViewComponent::Base
  def initialize( controller: nil, **options)
    @controller = "ratio-component" + ' ' + controller.to_s
    @options = options.to_json
  end
end
