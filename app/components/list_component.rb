# frozen_string_literal: true

class ListComponent < ViewComponent::Base
  def initialize( controller: nil, tag: :ol, **options)
    @controller = "list-component" + ' ' + controller.to_s
    @tag = tag
    # options.keys.each {|key| options[key.to_s.camelize(:lower).to_sym] = options.delete(key)}
    @options = options.to_json
  end
end
