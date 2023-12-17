# frozen_string_literal: true

class Avatar::CircleComponent < ViewComponent::Base
  def initialize(klass: 'w-10 h-10', img_class: nil, src: nil, status: nil)
    @klass = klass.to_s + ' hidden'
    @img_class = img_class
    @src = src
    @status = status
  end
end
