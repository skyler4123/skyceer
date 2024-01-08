import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['switch']
  static values = {
    showIndex: { type: Number, default: 0 },

    klass: { type: String, default: " " },
    switchClass: { type: String, default: " " },

    klassDefault: { type: String, default: " " },
    switchClassDefault: { type: String, default: " cursor-pointer" },

  }
  initialize() {
    this.initializeID()
    this.initializeTarget()
    this.initializeClass()

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

  initializeTarget() {
    this.switchTargets.forEach((target, index) => {
      target.setAttribute(`data-${this.identifier}-show-index-param`, (index + 1) % this.switchTargets.length)
      target.setAttribute('data-action', `click->${this.identifier}#switch`)
    })
  }

  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
    this.switchTargets.forEach((target) => {
      target.className = target.className + ' ' + this.switchClassDefaultValue + ' ' + this.switchClassValue
    })
  }

  switch(event) {
    const showIndex = event.params.showIndex
    this.showIndexValue = showIndex
  }
  showIndexValueChanged() {
    this.switchTargets.forEach((target) => {
      target.classList.add('hidden')
    })
    this.switchTargets[this.showIndexValue].classList.remove('hidden')
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
