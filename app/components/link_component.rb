# frozen_string_literal: true

class LinkComponent < ApplicationComponent

  def initialize(controller: nil, tag: :div, **params)
    @tag = :a
    super
  end

end
