# frozen_string_literal: true

class TextComponent < ApplicationComponent

  def initialize(controller: nil, tag: :div, **options)
    tag = :label if options[:type] && (options[:type] == 'label' || options[:type] == :label)
    super
    raise ArgumentError unless options[:label]
  end

end
