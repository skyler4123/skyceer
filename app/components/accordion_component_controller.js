import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["content", "grid"]
  static values = {
    isOpen: { type: Boolean, default: true },
    event: { type: Object },
    canSendGlobalDispatch: { type: Boolean, default: false },
    canReceiveGlobalDispatch: { type: Boolean, default: false },

    accordionDirection: { type: String, default: "vertical" },

    klass: { type: String, default: "" },
    contentClass: { type: String, default: '' },
    gridClass: { type: String, default: '' },
    klassDefault: { type: String },
    contentClassDefault: { type: String },
    gridClassDefault: { type: String, default: 'overflow-hidden' },
  }


  initialize() {
    this.initializeID()
    this.initializeDefaultClass()
    this.initializeClass()
    this.initializeAction()
    this.initializeEvent()

    this.initializeComplete()
  }
  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}-${crypto.randomUUID()}`
    }
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeDefaultClass() {
    if (this.accordionDirectionValue === "vertical") {
      this.klassDefaultValue = "flex flex-col"
      this.contentClassDefaultValue = "grid grid-rows-[0fr] open:grid-rows-[1fr] transition-all duration-200 ease-in-out overflow-hidden"
    }
    if (this.accordionDirectionValue === "horizontal") {
      this.klassDefaultValue = "flex flex-row overflow-hidden"
      this.contentClassDefaultValue = "whitespace-nowrap grid grid-cols-[0fr] open:grid-rows-[1fr] open:grid-cols-[1fr] transition-all duration-200 ease-in-out overflow-hidden"
    }
  }
  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
    this.contentTarget.className = this.contentTarget.className + ' ' + this.contentClassDefaultValue + ' ' + this.contentClassValue
    this.gridTarget.className = this.gridTarget.className + ' ' + this.gridClassDefaultValue + ' ' + this.gridClassValue
  }

  initializeAction() {
    if (this.eventValue?.id && this.eventValue?.listener && this.eventValue?.action) {
      this.canSendGlobalDispatchValue = true
    }
    if (this.eventValue?.id && !this.eventValue?.listener && !this.eventValue?.action) {
      this.canReceiveGlobalDispatchValue = true
    }
  }

  initializeEvent() {
    if (this.eventValue.id) {
      this.dispatch('dispatch', { detail: { event: { ...this.eventValue, action: 'initialize' } } })
    }
  }

  canSendGlobalDispatchValueChanged(value, previousValue) {
    if (this.canSendGlobalDispatchValue) {
      if (this.eventValue.listener === 'click') {
        this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `click->${this.identifier}#${this.eventValue.action}`
      }
      if (this.eventValue.listener === 'hover') {
        this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `mouseenter->${this.identifier}#${this.eventValue.action} mouseleave->${this.identifier}#${this.eventValue.action}`
      }
    }
  }

  canReceiveGlobalDispatchValueChanged() {
    if (this.canReceiveGlobalDispatchValue) {
      this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
    }
  }

  globalDispatch({ detail: { event } }) {
    if (this.eventValue.id === event.id && this.element.id !== event.controller.element.id) {
      eval(`this.${event.action}(event)`)
    }
  }

  toggle(event) {
    this.isOpenValue = !this.isOpenValue
    if (this.canSendGlobalDispatchValue) {
      this.dispatch('dispatch', { detail: { event: { ...this.eventValue, controller: this } } })
      event.stopPropagation()
    }
  }

  open(event) {
    this.isOpenValue = true
    if (this.canSendGlobalDispatchValue) {
      this.dispatch('dispatch', { detail: { event: { ...this.eventValue, controller: this } } })
      event.stopPropagation()
    }
  }

  close(event) {
    this.isOpenValue = false
    if (this.canSendGlobalDispatchValue) {
      this.dispatch('dispatch', { detail: { event: { ...this.eventValue, controller: this } } })
      event.stopPropagation()
    }
  }

  isOpenValueChanged(value, previousValue) {
    if (this.isOpenValue) {
      this.element.setAttribute('open', '')
      this.contentTarget.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
      this.contentTarget.removeAttribute('open')
    }
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
