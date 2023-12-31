import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["buttonClose"]
  static values = {
    isOpen: { type: Boolean, default: true },

    klass: { type: String, default: " " },
    defaultKlass: { type: String, default: " " },
  }

  initialize() {
    this.initializeID()
    this.initializeClass()
    this.initializeTarget()
    this.initializeOutlet()

    this.initializeCompleted()
  }
  initializeID() {
    this.element.id = `${this.identifier}-${crypto.randomUUID()}`
  }
  initializeCompleted() {
    this.element.classList.remove('hidden')
  }

  initializeClass() {
    this.element.className = this.element.className + this.defaultKlassValue + this.klassValue
  }

  initializeTarget() {
    this.initializeButtonClose()
  }

  initializeButtonClose() {
    const target = this.element.querySelector('[data-controller="button--close-component"]')
    target.setAttribute(`data-${this.identifier}-target`, 'buttonClose')
  }

  initializeOutlet() {
    this.buttonCloseTarget.setAttribute(`data-${this.buttonCloseTarget.dataset.controller}-${this.identifier}-outlet`, `#${this.element.id}`)
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
