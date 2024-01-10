import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["content", "grid"]
  static values = {
    isOpen: { type: Boolean, default: true },
    action: { type: String },
    eventListener: { type: String },
    eventId: { type: String },

    klass: { type: String, default: "" },
    contentClass: { type: String, default: '' },
    gridClass: { type: String, default: '' },
    defaultKlass: { type: String, default: " " },
    defaultcontentClass: { type: String, default: " " },
    defaultGridClass: { type: String, default: ' overflow-hidden' },

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
    if (this.positionValue === "bottom") {
      this.defaultKlassValue = " flex flex-col"
      this.defaultBodyClassValue = " grid grid-rows-[0fr] open:grid-rows-[1fr] transition-all duration-200 ease-in-out overflow-hidden"
    }
    if (this.positionValue === "top") {
      this.defaultKlassValue = "flex flex-col-reverse"
      this.defaultBodyClassValue = " grid grid-rows-[0fr] open:grid-rows-[1fr] transition-all duration-200 ease-in-out overflow-hidden"
    }
    if (this.positionValue === "right") {
      this.defaultKlassValue = "flex flex-row"
      this.defaultBodyClassValue = " grid grid-cols-[0fr] open:grid-cols-[1fr] transition-all duration-200 ease-in-out overflow-hidden"
    }
    if (this.positionValue === "left") {
      this.defaultKlassValue = "flex flex-row-reverse"
      this.defaultBodyClassValue = " grid grid-cols-[0fr] open:grid-cols-[1fr] transition-all duration-200 ease-in-out overflow-hidden"
    }
  }
  initializeClass() {
    this.element.className = this.element.className + this.defaultKlassValue + this.klassValue
    this.contentTarget.className = this.contentTarget.className + this.defaultcontentClassValue + this.contentClassValue
    this.bodyTarget.className = this.bodyTarget.className + this.defaultBodyClassValue + this.bodyClassValue
    if (this.hasIconTarget) {
      this.iconTarget.className = this.iconTarget.className + this.defaultIconClassValue + this.iconClassValue
    }
    this.gridTarget.className = this.gridTarget.className + this.defaultGridClassValue + this.gridClassValue
  }
  initializeAction() {
    if (this.eventListenerValue === "click") {
      this.contentTarget.setAttribute('data-action', `click->${this.identifier}#toggle`)
    }
    if (this.eventListenerValue === "hover") {
      this.contentTarget.setAttribute('data-action', `mouseover->${this.identifier}#toggle mouseout->${this.identifier}#toggle`)
    }
  }
  toggle(event) {
    this.isOpenValue = !this.isOpenValue
    event.stopPropagation()
  }
  isOpenValueChanged(value, previousValue) {
    if (this.isOpenValue === true) {
      this.contentTarget.setAttribute('open', '')
      this.bodyTarget.setAttribute('open', '')
    } else {
      this.contentTarget.removeAttribute('open')
      this.bodyTarget.removeAttribute('open')
    }
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
