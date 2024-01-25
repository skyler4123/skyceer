# frozen_string_literal: true

class LinkComponent < ViewComponent::Base
  renders_many :prepends
  renders_many :appends
  renders_one :body

  def initialize( controller: nil, **options)
    @controller = "link-component" + ' ' + controller.to_s
    # options.keys.each {|key| options[key.to_s.camelize(:lower).to_sym] = options.delete(key)}
    @options = options.to_json
  end
end
