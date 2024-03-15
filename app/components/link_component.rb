# frozen_string_literal: true

class LinkComponent < ApplicationComponent

  def initialize(controller: nil, tag: :div, **options)
    @tag = :a
    super
  end

end
