import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['template', 'hr', 'span']
  static values = {
    klass: { type: String, default: "inline-flex items-center justify-center w-screen" },
    hrClass: { type: String, default: "w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" },
    spanClass: { type: String, default: "absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900" },
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
    this.element.classList = this.klassValue
  }
  templateHTML() {
    return this.templateTarget.innerHTML
  }

  initHTML() {
    return `
      <div class="flex items-center justify-center w-full">
        <hr class="w-1/3 flex-none h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
        <div class="grow text-center font-medium text-gray-900 bg-white dark:text-white dark:bg-gray-900">
          ${this.templateHTML()}
        </div>
        <hr class="w-1/3 flex-none h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
      </div>
    `
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
