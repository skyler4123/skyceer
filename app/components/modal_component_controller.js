import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['background', 'content']
  static values = {
    isOpen: { type: Boolean, default: false },
    event: { type: Object },

    klass: { type: String, default: '' },
    backgroundClass: { type: String, default: '' },
    contentClass: { type: String, default: '' },

    klassDefault: { type: String, default: 'fixed top-0 hidden open:flex' },
    backgroundClassDefault: { type: String, default: 'w-screen h-screen bg-gray-300/50' },
    contentClassDefault: { type: String, default: 'absolute z-30 flex justify-center items-center w-fit h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' },
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
    if (!this.eventValue) { return }

    // if (this.eventValue.listener === 'click') {
    //   this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `click->${this.identifier}#${this.eventValue.action}`
    // }
    // if (this.eventValue.listener === 'hover') {
    //   this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `mouseenter->${this.identifier}#${this.eventValue.action} mouseleave->${this.identifier}#${this.eventValue.action}`
    // }
  }

  globalDispatch({ detail: { payload } }) {
    if (this.eventValue.id === payload.event.id) {
      eval(`this.${payload.event.action}(payload)`)
    }
  }

  toggle(event) {
    this.isOpenValue = !this.isOpenValue
    if (event.target) {
      event.stopPropagation()
    }
  }

  open(event) {
    this.isOpenValue = true
    if (event.target) {
      event.stopPropagation()
    }
  }

  close(event) {
    this.isOpenValue = false
    if (event.target) {
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
