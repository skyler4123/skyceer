import ApplicationController from './application_controller'
export default class extends ApplicationController {
  static targets = ['ratio', 'comparison', 'input']
  static values = {
    comparison: { type: Number }
  }
  initialize() {
    // console.log("Hello, Stimulus!", this.element);
    this.initializeValue()
    this.initializeTarget()
  }
  connect() {
    // console.log(this)
  }

  initializeValue() {}
  initializeTarget() {
    if (!this.hasRatioTarget) {
      this.element.children[0].setAttribute(`data-${this.identifier}-target`, 'ratio')
      this.element.children[1].setAttribute(`data-${this.identifier}-target`, 'ratio')
    }
    if (!this.hasComparisonTarget) {
      this.element.children[this.element.children.length - 1].setAttribute(`data-${this.identifier}-target`, 'comparison')
    }
    if (!this.hasInputTarget) {
      setTimeout(() => {
        this.comparisonTarget.querySelector('input').setAttribute(`data-${this.identifier}-target`, 'input')
        this.inputTarget.dataset.action = (this.inputTarget.dataset.action || '') + ' ' + `input->${this.identifier}#input`
      }, 500)
    }
  }

  input() {
    this.comparisonValue = this.inputTarget.value
  }

  comparisonValueChanged(value, previousValue) {
    if (previousValue === undefined) { return }

    this.firstRatioController.ratioValue = this.comparisonValue
    this.lastRatioController.ratioValue = this.comparisonValue
  }

  get parentController() {
    return this.element.closest('[data-controller]')
  }
  get firstRatioElement() {
    return this.ratioTarget
  }
  get lastRatioElement() {
    return this.ratioTargets[this.ratioTargets.length - 1]
  }
  get firstRatioController() {
    return this.application.getControllerForElementAndIdentifier(this.firstRatioElement, 'ratio-component')
  }
  get lastRatioController() {
    return this.application.getControllerForElementAndIdentifier(this.lastRatioElement, 'ratio-component')
  }
}
