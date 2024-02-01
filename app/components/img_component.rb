# frozen_string_literal: true

class ImgComponent < ViewComponent::Base
  def initialize( controller: nil, **options)
    @controller = "img-component" + ' ' + controller.to_s
    @options = options.to_json
  end
end
