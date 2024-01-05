import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["content"]
  static values = {
    isOpen: { type: Boolean, default: false },
    position: { type: String, default: "left" },
    closable: { type: Boolean, default: true },
    klass: { type: String },
    contentClass: { type: String },
    klassDefault: { type: String },
    contentClassDefault: { type: String },
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
    if (this.positionValue === "left") {
      this.klassValue = this.klassValue || " w-1/3 h-5/6 bg-gray-200 rounded-lg text-black shadow-lg shadow-gray-500/50 open:translate-x-0 open:left-2 p-4"
      this.contentClassValue = this.contentClassValue || " "
      this.klassDefaultValue = this.klassDefaultValue || " fixed top-1/2 left-0 z-20 -translate-x-full -translate-y-1/2 duration-200 ease-in-out"
      this.contentClassDefaultValue = this.contentClassDefaultValue || " w-full h-full flex justify-center items-center"
    }
  }

  initializeClass() {
    this.element.className = this.element.className + this.klassDefaultValue + this.klassValue
    this.contentTarget.className = this.contentTarget.className + this.contentClassDefaultValue + this.contentClassValue
  }

  initializeAction() {
    this.element.dataset.action = (this.element.dataset.action || "") + ` toggle:toggle@window->${this.identifier}#toggle`
  }

  toggle({ detail: { id, type } }) {
    if (this.element.id != id) { return }
    if (type === 'open') { this.isOpenValue = true }
    if (type === 'close') { this.isOpenValue = false }
    if (type === 'toggle') { this.isOpenValue = !this.isOpenValue }
  }

  isOpenValueChanged() {
    if (this.isOpenValue) {
      this.element.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
    }
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
