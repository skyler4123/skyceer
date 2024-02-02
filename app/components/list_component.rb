# frozen_string_literal: true

class ListComponent < ApplicationComponent
  def initialize( controller: nil, tag: :ol, **options)
    super
    @tag = tag
  end
end
