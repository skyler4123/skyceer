# frozen_string_literal: true

class BoxComponent < ViewComponent::Base
  def initialize( controller: nil, **options)
    @controller = "box-component" + ' ' + controller.to_s
    if options[:position]
      options[:position] = options[:position].to_s.camelize(:lower).to_sym
    end
    options.keys.each {|key| options[key.to_s.camelize(:lower).to_sym] = options.delete(key)}
    @options = options.to_json
  end
end
