# frozen_string_literal: true

class PopoverComponent < ViewComponent::Base
  def initialize( controller: nil, **options)
    @controller = "popover-component" + ' ' + controller.to_s
    # options[:position] = options[:position].to_s.camelize(:lower).to_sym if options[:position]
    # options.keys.each {|key| options[key.to_s.camelize(:lower).to_sym] = options.delete(key)}
    @options = options.to_json
  end
end
