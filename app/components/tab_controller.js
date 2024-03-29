import ApplicationController from "../javascript/controllers/application_controller";

export default class TabController extends ApplicationController {
  static targets = ["tab"]
  static values = {
    ...super.values,
    tabIndex: { type: Number }
  }

  initialize() {
    super.initialize()
    this.initializeTarget()
    this.initializeComplete()
  }

  initializeTarget() {
    Array.from(this.element.children).forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, 'tab')
    })
  }

  initializeAction() {
    super.initializeAction()
    this.addAction(this.element, `click->${this.identifier}#tabNext`)
  }

  tab(event) {
    this.tabIndexValue = event.value
  }

  tabToIndex(index) {
    this.tabIndexValue = index
  }

  tabIndexOf(element) {
    let findIndex
    this.tabTargets.forEach((target, index) => {
      if (findIndex) { return }
      if (target.contains(element)) { findIndex = index }
    })
    return findIndex
  }

  tabNext() {
    if (this.tabIndexValue === this.maxIndex) {
      this.tabIndexValue = 0
    } else {
      this.tabIndexValue = this.tabIndexValue + 1
    }
  }

  tabBack() {
    if (this.tabIndexValue === 0) {
      this.tabIndexValue = this.maxIndex
    } else {
      this.tabIndexValue = this.tabIndexValue - 1
    }
  }

  tabFirst() {
    this.tabIndexValue = 0
  }

  tabLast() {
    this.tabIndexValue = this.maxIndex
  }

  tabIndexValueChanged(value, previousValue) {
    this.tabTargets.forEach((target) => {
      target.removeAttribute('open')
    })
    this.tabTargets[this.tabIndexValue].setAttribute('open', '')
    if (this.isRestore && previousValue !== undefined) {
      setTimeout(() => {
        this.tabIndexValue = this.restoreIndex
      }, this.restoreTimeout)
    }
  }

  get type() {
    return this.paramsValue.type || 'default'
  }
  get typeClass() {
    return {
      default: {
        element: '',
        tabTarget: 'hidden open:flex'
      }
    }
  }
  get maxIndex() {
    return this.tabTargets.length - 1
  }
  get isRestore() {
    if (typeof this.paramsValue.restoreIndex != "undefined" || typeof this.paramsValue.restoreTimeout != "undefined") {
      return true
    }
    return this.paramsValue.isRestore
  }
  get restoreIndex() {
    return this.paramsValue.restoreIndex || 0
  }
  get restoreTimeout() {
    return this.paramsValue.restoreTimeout || 5000
  }
}