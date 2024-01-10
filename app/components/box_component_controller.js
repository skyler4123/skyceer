import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["content"]
  static values = {
    isOpen: { type: Boolean, default: true },
    action: { type: String },
    eventListener: { type: String },
    eventId: { type: String },

    klass: { type: String, default: "w-full h-full bg-white rounded-lg border border-gray-200 text-black shadow-lg shadow-gray-500/50" },
    defaultKlass: { type: String, default: "" },
    contentClass: { type: String, default: "" },
    contentClassDefault: { type: String, default: "flex flex-col w-full h-full" }
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
    this.element.className = this.element.className + ' ' + this.defaultKlassValue + ' ' + this.klassValue
    this.contentTarget.className = this.contentTarget.className + ' ' + this.contentClassDefaultValue + ' ' + this.contentClassValue
  }

  initializeAction() {
    this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
  }

  globalDispatch({ detail: { payload } }) {
    console.log('hahaha', payload)
    if (this.eventIdValue === payload.id) {
      if (payload.action === "toggle") { this.toggle() }
      if (payload.action === "open") { this.open() }
      if (payload.action === "close") { this.close() }
    }
  }

  toggle() {
    this.isOpenValue = !this.isOpenValue
  }

  open() {
    this.isOpenValue = true
  }

  close() {
    this.isOpenValue = false
  }

  isOpenValueChanged(value, previousValue) {
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
