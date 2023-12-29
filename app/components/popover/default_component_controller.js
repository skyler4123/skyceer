import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    position: { type: String, default: 'bottom_left' }
  }

  initialize() {
    this.initializeParent()
    this.initializeClass()
  }
  initializeClass() {
    this.element.className = this.positionClass()[this.positionValue]
  }
  initializeParent() {
    this.parentController().classList.add('relative')
    this.parentController().setAttribute('data-action', `click->${this.parentController().dataset.controller}#togglePopover`)
  }
  parentController() {
    return this.element.parentNode.closest('[data-controller]')
  }
  positionClass() {
    return {
      'bottom_left': 'justify-center items-center absolute z-10 -bottom-2 left-0 translate-y-full',
      'bottom_center': 'justify-center items-center absolute z-10 -bottom-2 translate-y-full',
      'bottom_right': 'justify-center items-center absolute z-10 -bottom-2 right-0 translate-y-full',
      'top_right': 'justify-center items-center absolute z-10 -top-2 right-0 -translate-y-full',
      'top_left': 'justify-center items-center absolute z-10 -top-2 left-0 -translate-y-full',
      'top_center': 'justify-center items-center absolute z-10 -top-2 -translate-y-full',
      'left_top': 'justify-center items-center absolute z-10 top-0 -left-2 -translate-x-full',
      'left_bottom': 'justify-center items-center absolute z-10 bottom-0 -left-2 -translate-x-full',
      'left_center': 'justify-center items-center absolute z-10 -left-2 -translate-x-full',
      'right_top': 'justify-center items-center absolute z-10 top-0 -right-2 translate-x-full',
      'right_bottom': 'justify-center items-center absolute z-10 bottom-0 -right-2 translate-x-full',
      'right_center': 'justify-center items-center absolute z-10 -right-2 translate-x-full'
    }
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
