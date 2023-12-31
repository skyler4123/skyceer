import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['template']
  static values = {
    klass: { type: String, default: 'w-full' }
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
    morphdom(this.templateTarget, this.initHTML())
  }

  initializeClass() {
    this.element.className = this.klassValue
  }
  
  initHTML() {
    return `
      <hr class="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    `
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
