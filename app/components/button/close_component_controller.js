import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static outlets = ["box-component"]
  static values = {
    klass: { type: String, default: " rounded-lg" },
    defaultKlass: { type: String, default: " flex justify-center items-center" }
  }
  initialize() {
    this.initializeID()
    this.initializeClass()
    this.initializeAction()
    this.initializeOutlet()
    
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

  initializeOutlet() {
    const boxComponentOutlet = this.element.parentNode.closest('[data-controller="box-component"]')
    this.element.setAttribute(`data-${this.identifier}-${boxComponentOutlet.dataset.controller}-outlet`, `#${boxComponentOutlet.id}`)
  }

  close() {
    this.boxComponentOutlet.isOpenValue = false
  }
  closeTarget() {
    return this.element.parentNode.closest('[data-controller="box-component"]')
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
