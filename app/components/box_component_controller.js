import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["content"]
  static values = {
    isOpen: { type: Boolean, default: true },
    closable: { type: Boolean, default: true },
    klass: { type: String, default: " w-80 h-96 bg-white rounded-lg border border-gray-200 text-black shadow-lg shadow-gray-500/50" },
    defaultKlass: { type: String, default: "" },
    contentClass: { type: String, default: " w-full h-full" },
    contentClassDefault: { type: String, default: "" }
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
    if (this.closableValue) {
      this.element.dataset.action = (this.element.dataset.action || "") + ` toggle:toggle@window->${this.identifier}#toggle`
    }
  }

  toggle({ detail: { id, type } }) {
    if (this.element.id != id) { return }
    if (type === 'open') { this.isOpenValue = true }
    if (type === 'close') { this.isOpenValue = false }
    if (type === 'toggle') { this.isOpenValue = !this.isOpenValue }
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
