import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['background', 'content']
  static values = {
    klass: { type: String, default: 'fixed h-screen w-screen inset-0 z-10 flex-col items-center justify-center bg-transparent hidden' },
    backgroundClass: { type: String, default: 'z-20 h-full w-full cursor-pointer' },
    contentClass: { type: String, default: 'z-30 opacity-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' }
  }

  initialize() {
    this.initializeParent()
    this.initializeTarget()
    this.initializeAction()
    this.initializeKlass()
    this.initializeBackgroundClass()
    this.initializeContentClass()
  }
  initializeParent() {
    this.parentController().setAttribute('data-action', `click->${this.parentController().dataset.controller}#openModal`)
  }
  initializeTarget() {
    this.element.firstElementChild.setAttribute(`data-${this.identifier}-target`, 'background')
    this.element.lastElementChild.setAttribute(`data-${this.identifier}-target`, 'content')
  }
  initializeAction() {
    this.backgroundTarget.setAttribute('data-action', `click->${this.identifier}#closeModal`)
  }
  initializeKlass() {
    this.klassValue.split(' ').forEach((klass) => {
      this.element.classList.add(klass)
    })
  }
  initializeBackgroundClass() {
    this.backgroundClassValue.split(' ').forEach((klass) => {
      this.backgroundTarget.classList.add(klass)
    })
  }
  initializeContentClass() {
    this.contentClassValue.split(' ').forEach((klass) => {
      this.contentTarget.classList.add(klass)
    })
  }
  parentController() {
    return this.element.parentNode.closest('[data-controller]')
  }
  closeModal() {
    this.element.classList.add('hidden')
    setTimeout(() => {
    this.element.parentNode.closest('[data-controller]').setAttribute('data-action', `click->${this.parentController().dataset.controller}#openModal`)
    }, 500)
  }

}
