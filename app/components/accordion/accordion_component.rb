# frozen_string_literal: true

class Accordion::AccordionComponent < ViewComponent::Base
  renders_many :headers
  renders_many :blocks
end
