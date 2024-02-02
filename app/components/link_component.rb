# frozen_string_literal: true

class LinkComponent < ApplicationComponent
  renders_many :prepends
  renders_many :appends
  renders_one :body
end
