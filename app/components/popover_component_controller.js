import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["content"]
  static values = {
    triggerEvent: { type: String, default: "click" },
    isOpen: { type: Boolean, default: false },
    position: { type: String, default: 'bottom_left' },

    klass: { type: String },
    contentClass: { type: String, default: "opacity-0 open:opacity-100 duration-200 ease-in-out" },
    
    defaultKlass: { type: String, default: "" },
    defaultContentClass: { type: String, default: "" }
  }

  initialize() {
    this.initializeID()
    this.initializeParent()
    this.initializeClass()
  }
  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}-${crypto.randomUUID()}`
    }
  }

  initializeParent() {
    if (this.triggerEventValue === "click") {
      this.parentTarget().setAttribute('data-action', `click->${this.parentTarget().dataset.controller}#togglePopover`)
    }
    if (this.triggerEventValue === "hover") {
      this.parentTarget().setAttribute('data-action', `mouseover->${this.parentTarget().dataset.controller}#togglePopover mouseout->${this.parentTarget().dataset.controller}#togglePopover`)
    }
  }

  initializeClass() {
    this.defaultKlassValue = this.positionClass()[this.positionValue]

    this.element.className = this.element.className + this.defaultKlassValue + this.klassValue
    this.contentTarget.className = this.contentTarget.className + this.defaultContentClassValue + this.contentClassValue
  }

  parentTarget() {
    if (this.element.parentNode.dataset.controller === "button-component") {
      return this.element.parentNode
    }
  }

  positionClass() {
    return {
      'bottom_left': 'hidden justify-center items-center absolute z-10 -bottom-2 left-0 translate-y-full',
      'bottom_center': 'hidden justify-center items-center absolute z-10 -bottom-2 translate-y-full',
      'bottom_right': 'hidden justify-center items-center absolute z-10 -bottom-2 right-0 translate-y-full',
      'top_right': 'hidden justify-center items-center absolute z-10 -top-2 right-0 -translate-y-full',
      'top_left': 'hidden justify-center items-center absolute z-10 -top-2 left-0 -translate-y-full',
      'top_center': 'hidden justify-center items-center absolute z-10 -top-2 -translate-y-full',
      'left_top': 'hidden justify-center items-center absolute z-10 top-0 -left-2 -translate-x-full',
      'left_bottom': 'hidden justify-center items-center absolute z-10 bottom-0 -left-2 -translate-x-full',
      'left_center': 'hidden justify-center items-center absolute z-10 -left-2 -translate-x-full',
      'right_top': 'hidden justify-center items-center absolute z-10 top-0 -right-2 translate-x-full',
      'right_bottom': 'hidden justify-center items-center absolute z-10 bottom-0 -right-2 translate-x-full',
      'right_center': 'hidden justify-center items-center absolute z-10 -right-2 translate-x-full'
    }
  }

  isOpenValueChanged() {
    if (this.isOpenValue) {
      this.element.classList.remove('hidden')
      this.element.classList.add('flex')
      this.contentTarget.setAttribute('open', '')
    } else {
      this.element.classList.add('hidden')
      this.element.classList.remove('flex')
      this.contentTarget.removeAttribute('open')
    }

  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
