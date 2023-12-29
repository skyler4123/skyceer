import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['template']
  initialize() {
    this.initializeTarget()
    this.initializeHTML()
    // this.initializeClass()

    this.initializeCompleted()
  }

  initializeCompleted() {
    this.element.classList.remove('hidden')
  }

  initializeTarget() {
    this.element.querySelector('template').setAttribute(`data-${this.identifier}-target`, 'template')
  }

  initializeHTML() {
    morphdom(this.templateTarget, this.initHTML())
  }

  initHTML() {
    return `
      <hr class="w-screen h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    `
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
