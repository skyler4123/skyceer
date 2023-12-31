import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["header", "body", "grid", "icon"]
  static values = {
    isOpen: { type: Boolean, default: false },
    triggerEvent: { type: String, default: "click" },
    position: { type: String, default: "bottom" },

    klass: { type: String, default: " " },
    headerClass: { type: String, default: ' ' },
    bodyClass: { type: String, default: " text-sm text-red-600" },
    gridClass: { type: String, default: ' ' },
    iconClass: { type: String, default: ' ' },

    defaultKlass: { type: String, default: " " },
    defaultHeaderClass: { type: String, default: " " },
    defaultBodyClass: { type: String, default: " " },
    defaultGridClass: { type: String, default: ' overflow-hidden' },
    defaultIconClass: { type: String, default: " rotate-0 open:rotate-180 transition duration-200 ease-in-out" }
  }


  initialize() {
    this.initializeID()
    this.initializeTarget()
    this.initializeDefaultClass()
    this.initializeClass()
    this.initializeAction()

    this.initializeCompleted()
  }
  initializeID() {
    this.element.id = `${this.identifier}-${crypto.randomUUID()}`
  }
  initializeCompleted() {
    this.element.classList.remove('hidden')
  }
  initializeTarget() {
    this.headerTarget.querySelector('[data-controller*=icon]')?.setAttribute(`data-${this.identifier}-target`, 'icon')
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
    this.headerTarget.className = this.headerTarget.className + this.defaultHeaderClassValue + this.headerClassValue
    this.bodyTarget.className = this.bodyTarget.className + this.defaultBodyClassValue + this.bodyClassValue
    if (this.hasIconTarget) {
      this.iconTarget.className = this.iconTarget.className + this.defaultIconClassValue + this.iconClassValue
    }
    this.gridTarget.className = this.gridTarget.className + this.defaultGridClassValue + this.gridClassValue
  }
  initializeAction() {
    if (this.triggerEventValue === "click") {
      this.headerTarget.setAttribute('data-action', `click->${this.identifier}#toggle`)
    }
    if (this.triggerEventValue === "hover") {
      this.headerTarget.setAttribute('data-action', `mouseover->${this.identifier}#toggle mouseout->${this.identifier}#toggle`)
    }
  }
  toggle() {
    this.isOpenValue = !this.isOpenValue
  }
  isOpenValueChanged() {
    if (this.isOpenValue === true) {
      this.headerTarget.setAttribute('open', '')
      this.bodyTarget.setAttribute('open', '')
      if (this.hasIconTarget) {
        this.iconTarget.setAttribute('open', '')
      } 
    } else {
      this.headerTarget.removeAttribute('open')
      this.bodyTarget.removeAttribute('open')
      if (this.hasIconTarget) {
        this.iconTarget.removeAttribute('open')
      }
    }
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
