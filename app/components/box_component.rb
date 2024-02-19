# frozen_string_literal: true

class BoxComponent < ApplicationComponent
  def initialize( controller: nil, tag: :div, **options)
    super
    @tag = tag
  end
end
