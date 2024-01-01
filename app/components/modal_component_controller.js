import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['background', 'content']
  static values = {
    isOpen: { type: Boolean, default: false },

    klass: { type: String, default: ' ' },
    backgroundClass: { type: String, default: ' bg-gray-200 opacity-50' },
    contentClass: { type: String, default: ' text-black' },

    klassDefault: { type: String, default: ' hidden fixed h-screen w-screen inset-0 z-10 flex-col items-center justify-center bg-transparent' },
    backgroundClassDefault: { type: String, default: ' z-20 h-full w-full cursor-pointer' },
    contentClassDefault: { type: String, default: ' z-30 opacity-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' },
  }

  initialize() {
    this.initializeID()
    this.initializeParent()
    this.initializeAction()
    this.initializeClass()
  }
  initializeID() {
    this.element.id = `${this.identifier}-${crypto.randomUUID()}`
  }

  initializeParent() {
    this.parentTarget().setAttribute('data-action', `click->${this.parentTarget().dataset.controller}#openModal`)
    this.parentTarget().setAttribute(`data-${this.parentTarget().dataset.controller}-${this.identifier}-outlet`, `#${this.element.id}`)
  }

  parentTarget() {
    if (this.element.parentNode.dataset.controller === "button-component") {
      return this.element.parentNode
    }
  }

  initializeAction() {
    this.backgroundTarget.setAttribute('data-action', `click->${this.identifier}#closeModal`)
  }

  initializeClass() {
    this.element.className = this.element.className + this.klassDefaultValue + this.klassValue
    this.backgroundTarget.className = this.backgroundTarget.className  + this.backgroundClassDefaultValue + this.backgroundClassValue
    this.contentTarget.className = this.contentTarget.className + this.contentClassDefaultValue + this.contentClassValue
  }
  openModal() {
    this.isOpenValue = true
  }

  closeModal() {
    this.isOpenValue = false
  }
  isOpenValueChanged() {
    if (this.isOpenValue) {
      this.element.classList.remove('hidden')
    } else {
      this.element.classList.add('hidden')
      setTimeout(() => {
        this.parentTarget().setAttribute('data-action', `click->${this.parentTarget().dataset.controller}#openModal`)
      }, 250)
    }
  }

}
