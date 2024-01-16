import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['template', 'content', 'hr']
  static values = {
    klass: { type: String, default: "" },
    contentClass: { type: String, default: "" },
    hrClass: { type: String, default: "h-0.5 bg-gray-200 border-0 dark:bg-gray-700" },
    klassDefault: { type: String, default: "w-full" },
    contentClassDefault: { type: String, default: "" },
    hrClassDefault: { type: String, default: "w-full" },
  }
  initialize() {
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
    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
    this.contentTarget.className = this.contentTarget.className + ' ' + this.contentClassDefaultValue + ' ' + this.contentClassValue
    this.hrTarget.className = this.hrTarget.className + ' ' + this.hrClassDefaultValue + ' ' + this.hrClassValue
  }
  
  initHTML() {
    return `
      <div data-${this.identifier}-target="content">
        <hr data-${this.identifier}-target="hr">
      </div>
    `
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
