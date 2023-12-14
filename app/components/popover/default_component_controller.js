import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    position: { type: String, default: 'bottom_left' }
  }

  initialize() {
    this.initializeParent()
    this.initializeKlass()
    this.initializeAttribute()
    this.element.focus()
  }
  initializePosition() {
    switch(this.positionValue) {
      case 'bottom_left':
        this.klassValue = 'justify-center items-center absolute -bottom-2 left-0 translate-y-full'
        break
      case 'bottom_center':
        this.klassValue = 'justify-center items-center absolute -bottom-2 translate-y-full'
        break
      case 'bottom_right':
        this.klassValue = 'justify-center items-center absolute -bottom-2 right-0 translate-y-full'
        break
      case 'top_right':
        this.klassValue = 'justify-center items-center absolute -top-2 right-0 -translate-y-full'
        break
      case 'top_left':
        this.klassValue = 'justify-center items-center absolute -top-2 left-0 -translate-y-full'
        break
      case 'top_center':
        this.klassValue = 'justify-center items-center absolute -top-2 -translate-y-full'
        break
      case 'left_top':
        this.klassValue = 'justify-center items-center absolute top-0 -left-2 -translate-x-full'
        break
      case 'left_bottom':
        this.klassValue = 'justify-center items-center absolute bottom-0 -left-2 -translate-x-full'
        break
      case 'left_center':
        this.klassValue = 'justify-center items-center absolute -left-2 -translate-x-full'
        break
      case 'right_top':
        this.klassValue = 'justify-center items-center absolute top-0 -right-2 translate-x-full'
        break
      case 'right_bottom':
        this.klassValue = 'justify-center items-center absolute bottom-0 -right-2 translate-x-full'
        break
      case 'right_center':
        this.klassValue = 'justify-center items-center absolute -right-2 translate-x-full'
        break
    }
  }
  initializeKlass() {
    this.initializePosition()
    this.klassValue.split(' ').forEach((klass) => {
      this.element.classList.add(klass)
    })
  }
  initializeParent() {
    this.parentController().classList.add('relative', 'group')
    this.parentController().setAttribute('tabindex', 0)
    this.parentController().setAttribute('data-action', `focusin->${this.parentController().dataset.controller}#openPopover focusout->${this.parentController().dataset.controller}#closePopover`)
  }
  initializeAttribute() {
    this.element.setAttribute('tabindex', 0)
  }
  parentController() {
    return this.element.parentNode.closest('[data-controller]')
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
