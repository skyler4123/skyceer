# frozen_string_literal: true

class TextComponent < ApplicationComponent

  def initialize(controller: nil, tag: :div, **params)
    tag = :label if params[:type] && (params[:type] == 'label' || params[:type] == :label)
    super
    raise ArgumentError unless params[:label]
  end

end
