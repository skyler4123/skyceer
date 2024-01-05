import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static outlets = ["box-component"]
  static values = {
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
    this.element.setAttribute('data-action', `click->${this.identifier}#close`)
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

  open() {
    this.dispatch('toggle', { detail: { id: `${this.closeTarget().id}`, type: "open" } })
  }

  close() {
    this.dispatch('toggle', { detail: { id: `${this.closeTarget().id}`, type: "close" } })
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
