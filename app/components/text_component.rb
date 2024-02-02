# frozen_string_literal: true

class TextComponent < ApplicationComponent
  renders_one :editor
  
  def initialize( controller: nil, tag: :div, **options)
    super
    raise ArgumentError unless options[:label]
    @tag = tag
  end
end
