# frozen_string_literal: true

class Boxchat::DefaultComponent < ViewComponent::Base
  renders_many :messages
end
