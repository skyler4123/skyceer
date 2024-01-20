# frozen_string_literal: true

class ImgComponent < ViewComponent::Base
  def initialize( controller: nil, **options)
    @controller = "img-component" + ' ' + controller.to_s
    options.keys.each {|key| options[key.to_s.camelize(:lower).to_sym] = options.delete(key)}
    @options = options.to_json
  end
end
