import morphdom from "morphdom"

import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['template', 'label', 'horizontalLine']
  static values = {
    label: { type: String, default: "Horizontal Line" },
    klass: { type: String, default: "inline-flex items-center justify-center w-screen" },
    hrClass: { type: String, default: "w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" },
    spanClass: { type: String, default: "absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900" },
  }
  initialize() {
    this.initializeTarget()
    this.initializeHTML()

    this.initializeComplete()
  }

  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeTarget() {
    this.element.querySelector('template').setAttribute(`data-${this.identifier}-target`, 'template')
  }

  initializeHTML() {
    morphdom(this.templateTarget, this.sourceHTML())
  }

  sourceHTML() {
    return `
      <div class="${this.klassValue}">
          <hr class="${this.hrClassValue}">
          <span class="${this.spanClassValue}">${this.labelValue}</span>
      </div>
    `
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
