import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['switches', 'switch']
  static values = {
    showIndex: { type: Number, default: 0 },

  }
  initialize() {
    this.initializeID()
    this.initializeTarget()
    this.initializeClass()

    this.initializeComplete()
  }
  initializeID() {
    this.element.id = `${this.identifier}-${crypto.randomUUID()}`
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeTarget() {
    Array.from(this.switchesTarget.children).forEach((target, index) => {
      target.setAttribute(`data-${this.identifier}-target`, 'switch')
      target.setAttribute(`data-${this.identifier}-show-index-param`, index)
      target.setAttribute('data-action', `click->${this.identifier}#switch`)
    })
  }
  initializeClass() {
  }
  showIndexValueChanged() {
    setTimeout(() => {
      this.switchTargets.forEach((target) => {
        target.classList.add('hidden')
      })
      this.switchTargets[this.showIndexValue + 1].classList.remove('hidden')
    }, 500)
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
