import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    position: { type: String, default: 'bottom_left' }
  }

  initialize() {
    this.initializeParent()
    this.initializeKlass()
  }
  initializePosition() {
    switch(this.positionValue) {
      case 'bottom_left':
        this.klassValue = 'group-hover:flex absolute z-10 -bottom-2 left-0 translate-y-full'
        break
      case 'bottom_center':
        this.klassValue = 'group-hover:flex absolute z-10 -bottom-2 translate-y-full'
        break
      case 'bottom_right':
        this.klassValue = 'group-hover:flex absolute z-10 -bottom-2 right-0 translate-y-full'
        break
      case 'top_right':
        this.klassValue = 'group-hover:flex absolute z-10 -top-2 right-0 -translate-y-full'
        break
      case 'top_left':
        this.klassValue = 'group-hover:flex absolute z-10 -top-2 left-0 -translate-y-full'
        break
      case 'top_center':
        this.klassValue = 'group-hover:flex absolute z-10 -top-2 -translate-y-full'
        break
      case 'left_top':
        this.klassValue = 'group-hover:flex absolute z-10 top-0 -left-2 -translate-x-full'
        break
      case 'left_bottom':
        this.klassValue = 'group-hover:flex absolute z-10 bottom-0 -left-2 -translate-x-full'
        break
      case 'left_center':
        this.klassValue = 'group-hover:flex absolute z-10 -left-2 -translate-x-full'
        break
      case 'right_top':
        this.klassValue = 'group-hover:flex absolute z-10 top-0 -right-2 translate-x-full'
        break
      case 'right_bottom':
        this.klassValue = 'group-hover:flex absolute z-10 bottom-0 -right-2 translate-x-full'
        break
      case 'right_center':
        this.klassValue = 'group-hover:flex absolute z-10 -right-2 translate-x-full'
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
  }
  parentController() {
    return this.element.parentNode.closest('[data-controller]')
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
