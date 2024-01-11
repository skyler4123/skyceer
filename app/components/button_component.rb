# frozen_string_literal: true
# typed: true

class ButtonComponent < ViewComponent::Base
  extend T::Sig

  renders_many :prepends
  renders_many :appends
  renders_one :body
  renders_many :hiddens
  
  sig {params(
    controller: T.nilable(String),
    controller_action: T.nilable(String),
    event: T.nilable(String),
    id: T.nilable(String),

    label: T.nilable(String),
    src: T.nilable(String),
    url: T.nilable(String),
    
    klass: T.nilable(String),
    content_class: T.nilable(String),
    button_class: T.nilable(String),
    link_class: T.nilable(String),
    klass_default: T.nilable(String),
    content_class_default: T.nilable(String),
    button_class_default: T.nilable(String),
    link_class_default: T.nilable(String),
    rest_data_attributes: T.nilable(Hash)
    ).void}
  def initialize(
    controller: nil,
    controller_action: nil,
    event: nil,
    id: nil,

    label: nil,
    src: nil,
    url: nil,

    klass: nil,
    content_class: nil,
    button_class: nil,
    link_class: nil,
    klass_default: nil,
    content_class_default: nil,
    button_class_default: nil,
    link_class_default: nil,
    **rest_data_attributes
  )
    @controller = "button-component" + ' ' + controller.to_s
    @controller_action = controller_action
    @event = event
    @id = id

    @label = label
    @url = url || src
    
    @klass = klass
    @content_class = content_class
    @button_class = button_class
    @link_class = link_class
    @klass_default = klass_default
    @content_class_default = content_class_default
    @button_class_default = button_class_default
    @link_class_default = link_class_default
    @rest_data_attributes = rest_data_attributes
  end
end
