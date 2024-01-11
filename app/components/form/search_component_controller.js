import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["content"]
  static values = {
    isOpen: { type: Boolean, default: true },
    event: { type: Object },

    klass: { type: String, default: "" },
    klassDefault: { type: String, default: "" },
    contentClass: { type: String, default: "" },
    contentClassDefault: { type: String, default: "" }
  }

  initialize() {
    this.initializeID()
    // this.initializeClass()
    // this.initializeAction()

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
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
