import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["content", "grid"]
  static values = {
    isOpen: { type: Boolean, default: false },
    eventAction: { type: String },
    eventListener: { type: String },
    eventId: { type: String },

    toggleDirection: { type: String, default: "vertical" },

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
    if (this.toggleDirectionValue === "vertical") {
      this.klassDefaultValue = "flex flex-col"
      this.contentClassDefaultValue = "grid grid-rows-[0fr] open:grid-rows-[1fr] transition-all duration-200 ease-in-out overflow-hidden"
    }
    if (this.toggleDirectionValue === "horizontal") {
      this.klassDefaultValue = "flex flex-row"
      this.contentClassDefaultValue = "grid grid-cols-[0fr] open:grid-cols-[1fr] transition-all duration-200 ease-in-out overflow-hidden"
    }
  }
  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
    this.contentTarget.className = this.contentTarget.className + ' ' + this.contentClassDefaultValue + ' ' + this.contentClassValue
    this.gridTarget.className = this.gridTarget.className + ' ' + this.gridClassDefaultValue + ' ' + this.gridClassValue
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
