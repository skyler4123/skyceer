# frozen_string_literal: true

class ButtonComponent < ApplicationComponent

  def initialize(controller: nil, tag: :button, **options)
    if options[:event]
      options[:events] ||= [options[:event]]
      options.delete(:event)
    end
    if options[:action]
      options[:actions] ||= [options[:action]]
      options.delete(:action)
    end
    super
  end
  
end
