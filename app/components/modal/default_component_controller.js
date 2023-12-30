import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['background', 'content']
  static values = {
    isOpen: { type: Boolean, default: false },
    klass: { type: String, default: 'hidden fixed h-screen w-screen inset-0 z-10 flex-col items-center justify-center bg-transparent' },
    backgroundClass: { type: String, default: 'bg-gray-200 opacity-50 z-20 h-full w-full cursor-pointer' },
    contentClass: { type: String, default: 'text-black z-30 opacity-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' }
  }

  initialize() {
    this.initializeID()
    this.initializeParent()
    this.initializeAction()
    this.initializeClass()
  }
  initializeID() {
    this.element.id = `controller-${crypto.randomUUID()}`
  }

  initializeParent() {
    this.parentController().setAttribute('data-action', `click->${this.parentController().dataset.controller}#openModal`)
    this.parentController().setAttribute(`data-${this.parentController().dataset.controller}-${this.identifier}-outlet`, `#${this.element.id}`)
  }

  parentController() {
    if (this.element.parentNode.dataset.controller === "button-component") {
      return this.element.parentNode
    }
  }

  initializeAction() {
    this.backgroundTarget.setAttribute('data-action', `click->${this.identifier}#closeModal`)
  }

  initializeClass() {
    this.element.className = this.klassValue
    this.backgroundTarget.className = this.backgroundClassValue
    this.contentTarget.className = this.contentClassValue
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
        this.parentController().setAttribute('data-action', `click->${this.parentController().dataset.controller}#openModal`)
      }, 500)
    }
  }
  // closeModal() {
  //   this.element.classList.add('hidden')
  //   setTimeout(() => {
  //   this.element.parentNode.closest('[data-controller]').setAttribute('data-action', `click->${this.parentController().dataset.controller}#openModal`)
  //   }, 500)
  // }

}
