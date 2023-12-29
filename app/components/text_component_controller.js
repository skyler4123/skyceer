import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template"]
  static values = {
    label: { type: String, default: "Text Sample" },
    klass: { type: String, default: "" }
  }

  initialize() {
    this.initializeTarget()
    this.initializeHTML()
    this.initializeClass()

    this.initializeComplete()
  }

  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeTarget() {
    this.element.querySelector('template').setAttribute(`data-${this.identifier}-target`, 'template')
  }
  
  initializeHTML() {
    morphdom(this.templateTarget, this.labelValue)
  }

  initializeClass() {
    this.element.className = this.klassValue
  }
}
