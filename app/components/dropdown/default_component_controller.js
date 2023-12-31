import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button", "icon", "header", "body"]
  static values = {
    triggerEvent: { type: String, default: "hover" },
    klass: { type: String, default: "relative inline-block group" },
    buttonClass: { type: String, default: "" },
    iconClass: { type: String, default: "rotate-0 open:rotate-180 duration-250" },
    bodyClass: { type: String, default: "h-0 opacity-0 open:h-fit open:flex open:flex-col open:opacity-100 absolute z-10 transition-opacity duration-200 ease-in-out" }
  }

  initialize() {
    this.initializeTarget()
    // this.initializeHTML()
    this.initializeClass()
    this.initializeAction()

    this.initializeComplete()
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeTarget() {
    this.headerTarget.querySelector("[data-controller='icon-component']").setAttribute(`data-${this.identifier}-target`, 'icon')
  }

  initializeClass() {
    this.bodyTarget.className = this.bodyClassValue
  }

  initializeAction() {
    if (this.triggerEventValue === "click") {
      this.headerTarget.setAttribute('data-action', `click->${this.identifier}#toggleDropdown`)
    }

    if (this.triggerEventValue === "hover") {
      this.headerTarget.setAttribute('data-action', `mouseover->${this.identifier}#toggleDropdown mouseout->${this.identifier}#toggleDropdown`)
    }
  }

  toggleDropdown() {
    this.iconTarget.toggleAttribute('open')
    this.bodyTarget.toggleAttribute('open')
  }

  connect() {
    // console.log(this.identifier, this.element);
  }
}
