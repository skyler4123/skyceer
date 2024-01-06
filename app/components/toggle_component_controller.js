import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    type: { type: String, default: "close" },
    targetId: { type: String },
    targetControllerName: { type: String },
    klass: { type: String, default: " rounded-lg" },
    defaultKlass: { type: String, default: " flex justify-center items-center" }
  }
  initialize() {
    this.initializeID()
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

  initializeClass() {
    this.element.className = this.element.className + this.defaultKlassValue + this.klassValue
  }

  initializeAction() {
    if (this.typeValue === "close") {
      this.element.setAttribute('data-action', `click->${this.identifier}#close`)
    }
    if (this.typeValue === "open") {
      this.element.setAttribute('data-action', `click->${this.identifier}#open`)
    }
    if (this.typeValue === "toggle") {
      this.element.setAttribute('data-action', `click->${this.identifier}#toggle`)
    }
  }

  closeTarget() {
    let closeTarget
    if (this.targetIdValue != "") {
      closeTarget = document.querySelector(`#${this.targetIdValue}`)
    } else if (this.targetControllerNameValue != "") {
      closeTarget = this.element.parentNode.closest(`[data-controller="${this.targetControllerNameValue}"]`)
    } else {
      closeTarget = this.element.parentNode.closest('[data-controller]')
    }
    return closeTarget
  }

  open(event) {
    this.dispatch('toggle', { detail: { id: `${this.closeTarget().id}`, type: "open" } })
    event.stopPropagation()
  }

  close(event) {
    this.dispatch('toggle', { detail: { id: `${this.closeTarget().id}`, type: "close" } })
    event.stopPropagation()
  }

  toggle(event) {
    this.dispatch('toggle', { detail: { id: `${this.closeTarget().id}`, type: "toggle" } })
    event.stopPropagation()
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
