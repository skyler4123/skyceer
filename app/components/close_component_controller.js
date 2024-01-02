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
    // this.initializeCloseTarget()
    
    this.initializeComplete()
  }
  initializeID() {
    this.element.id = `${this.identifier}-${crypto.randomUUID()}`
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

  initializeCloseTarget() {
    if (this.hasTargetIdValue) {
      console.log(this)
      const closableTarget = document.querySelector(`#${this.targetIdValue}`)
    } else if (this.hasTargetControllerNameValue) {
      const closableTarget = this.element.parentNode.closest(`[data-controller="${this.targetControllerNameValue}"]`)
    } else {
      const closableTarget = this.element.parentNode.closest('[data-controller]')
    }
    closableTarget.setAttribute('data-action', `${this.identifier}:close->${closableTarget.dataset.controller}#close`)
  }

  close() {
    this.dispatch('close')
  }
  closeTarget() {
    return this.element.parentNode.closest('[data-controller="box-component"]')
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
