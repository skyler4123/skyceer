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
    
    this.initializeCompleted()
  }
  initializeID() {
    this.element.id = `${this.identifier}-${crypto.randomUUID()}`
  }
  initializeCompleted() {
    this.element.classList.remove('hidden')
  }

  initializeClass() {
    this.element.className = this.element.className + this.defaultKlassValue + this.klassValue
  }

  initializeAction() {
    this.element.setAttribute('data-action', `click->${this.identifier}#close`)
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
