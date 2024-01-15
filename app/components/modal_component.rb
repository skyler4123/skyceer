# frozen_string_literal: true

class ModalComponent < ViewComponent::Base
  def initialize(
    controller: nil,
    controller_action: nil,
    is_open: nil,
    event: nil,
    id: nil,

    klass: nil,
    background_class: nil,
    content_class: nil,
    defaul_klass: nil,
    defaul_background_class: nil,
    defaul_content_class: nil,
    **rest_data_attributes
  )
    @controller = "modal-component" + ' ' + controller.to_s
    @controller_action = controller_action
    @is_open = is_open
    @event = event
    @id = id

    @klass = klass
    @background_class = background_class
    @content_class = content_class
    @defaul_klass = defaul_klass
    @defaul_background_class = defaul_background_class
    @defaul_content_class = defaul_content_class
    @rest_data_attributes = rest_data_attributes
    
    if @event && @event[:action]
      @event[:action] = @event[:action].to_s.camelize(:lower) 
    end
  end
end
