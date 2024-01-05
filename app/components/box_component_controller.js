import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["buttonClose"]
  static values = {
    isOpen: { type: Boolean, default: true },
    closable: { type: Boolean, default: true },
    klass: { type: String, default: " " },
    defaultKlass: { type: String, default: " " },
  }

  initialize() {
    this.initializeID()
    this.initializeClass()

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
    if (this.closableValue) {
      this.element.dataset.action = this.element.dataset.action + ` close-component:close->${this.identifier}#close`
    }
  }

  close({ detail: { id } }) {
    if (this.element.id === id) {
      this.isOpenValue = false
    }
  }

  isOpenValueChanged() {
    if (this.isOpenValue) {
      this.element.classList.remove('hidden')
    } else {
      this.element.classList.add('hidden')
    }
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
