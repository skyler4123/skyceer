# frozen_string_literal: true

class ButtonComponent < ViewComponent::Base
  renders_many :prepends
  renders_many :appends
  renders_one :body
  renders_many :hiddens

  def initialize( controller: nil, **options)
    @controller = "button-component" + ' ' + controller.to_s
    if options[:event] 
      options[:events] = [options[:event]]
      options.delete(:event)
    end
    options[:events].each { |event| event[:action] = event[:action].to_s.camelize(:lower).to_sym }
    
    @options = options.to_json
  end
end
