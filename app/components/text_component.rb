# frozen_string_literal: true

class TextComponent < ViewComponent::Base
  renders_one :editor
  
  def initialize( controller: nil, tag: :div, **options)
    @controller = "text-component" + ' ' + controller.to_s
    @tag = tag
    # options.keys.each {|key| options[key.to_s.camelize(:lower).to_sym] = options.delete(key)}
    raise ArgumentError unless options[:label]
    @options = options.to_json
  end
end
