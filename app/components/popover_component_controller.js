import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["content"]
  static values = {
    isOpen: { type: Boolean, default: false },
    position: { type: String, default: 'bottom_left' },

    klass: { type: String },
    contentClass: { type: String, default: "opacity-0 open:opacity-100 duration-200 ease-in-out" },
    
    defaultKlass: { type: String, default: "" },
    defaultContentClass: { type: String, default: "" }
  }

  initialize() {
    this.initializeID()
    this.initializeClass()
    this.initializeAction()
  }
  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}-${crypto.randomUUID()}`
    }
  }

  initializeClass() {
    this.defaultKlassValue = this.positionClass()[this.positionValue]

    this.element.className = this.element.className + this.defaultKlassValue + this.klassValue
    this.contentTarget.className = this.contentTarget.className + this.defaultContentClassValue + this.contentClassValue
  }

  initializeAction() {
    this.element.dataset.action = (this.element.dataset.action || "") + ` toggle:toggle@window->${this.identifier}#toggle`
  }

  positionClass() {
    return {
      'bottom_left': ' justify-center items-center absolute z-10 -bottom-2 left-0 translate-y-full',
      'bottom_center': ' justify-center items-center absolute z-10 -bottom-2 translate-y-full',
      'bottom_right': ' justify-center items-center absolute z-10 -bottom-2 right-0 translate-y-full',
      'top_right': ' justify-center items-center absolute z-10 -top-2 right-0 -translate-y-full',
      'top_left': ' justify-center items-center absolute z-10 -top-2 left-0 -translate-y-full',
      'top_center': ' justify-center items-center absolute z-10 -top-2 -translate-y-full',
      'left_top': ' justify-center items-center absolute z-10 top-0 -left-2 -translate-x-full',
      'left_bottom': ' justify-center items-center absolute z-10 bottom-0 -left-2 -translate-x-full',
      'left_center': ' justify-center items-center absolute z-10 -left-2 -translate-x-full',
      'right_top': ' justify-center items-center absolute z-10 right-0 translate-x-full top-0',
      'right_bottom': ' justify-center items-center absolute z-10 right-0 translate-x-full bottom-0',
      'right_center': ' justify-center items-center absolute z-10 right-0 translate-x-full -translate-y-1/2 top-1/2'
    }
  }

  toggle({ detail: { id, type } }) {
    if (this.element.id != id) { return }
    if (type === 'open') { this.isOpenValue = true }
    if (type === 'close') { this.isOpenValue = false }
    if (type === 'toggle') { this.isOpenValue = !this.isOpenValue }
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
