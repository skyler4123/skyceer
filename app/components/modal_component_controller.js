import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['background', 'content']
  static values = {
    isOpen: { type: Boolean, default: true },
    eventAction: { type: String },
    eventListener: { type: String },
    eventId: { type: String },

    klass: { type: String, default: '' },
    backgroundClass: { type: String, default: '' },
    contentClass: { type: String, default: '' },

    klassDefault: { type: String, default: 'absolute hidden open:flex' },
    backgroundClassDefault: { type: String, default: 'w-screen h-screen bg-gray-300/50' },
    contentClassDefault: { type: String, default: 'absolute flex justify-center items-center w-fit h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' },
  }

  initialize() {
    this.initializeID()
    this.initializeAction()
    this.initializeClass()
  }
  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}-${crypto.randomUUID()}`
    }
  }

  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
    this.backgroundTarget.className = this.backgroundTarget.className  + ' ' + this.backgroundClassDefaultValue + ' ' + this.backgroundClassValue
    this.contentTarget.className = this.contentTarget.className + ' ' + this.contentClassDefaultValue + ' ' + this.contentClassValue
  }

  initializeAction() {
    this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
    if (!this.eventListenerValue) { return }

    if (this.eventListenerValue === 'click') {
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `click->${this.identifier}#${this.eventActionValue}`
    }
    if (this.eventListenerValue === 'hover') {
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `mouseenter->${this.identifier}#${this.eventActionValue} mouseleave->${this.identifier}#${this.eventActionValue}`
    }
  }

  globalDispatch({ detail: { payload } }) {
    if (this.eventIdValue === payload.id) {
      if (payload.action === "toggle") { this.toggle() }
      if (payload.action === "open") { this.open() }
      if (payload.action === "close") { this.close() }
    }
  }

  toggle(event) {
    this.isOpenValue = !this.isOpenValue
    if (event) {
      event.stopPropagation()
    }
  }

  open(event) {
    this.isOpenValue = true
    if (event) {
      event.stopPropagation()
    }
  }

  close(event) {
    this.isOpenValue = false
    if (event) {
      event.stopPropagation()
    }
  }

  isOpenValueChanged(value, previousValue) {
    if (this.isOpenValue) {
      this.element.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
    }
  }

}
