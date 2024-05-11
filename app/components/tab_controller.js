import ApplicationController from "../javascript/controllers/application_controller";

export default class TabController extends ApplicationController {
  static targets = ["tab"]
  static values = {
    ...super.values,
    tabIndex: { type: Number }
  }

  init() {
    this.initTarget()
  }

  initParams() {
    this.setParams({name: 'type', defaultValue: 'default'})
    // this.setParams({name: 'isRestore', defaultValue: false})
    // this.setParams({name: 'restoreIndex', defaultValue: 0})
    // this.setParams({name: 'restoreTimeout', defaultValue: 5000})
  }

  initTarget() {
    Array.from(this.element.children).forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, 'tab')
    })
  }

  // initAction() {
  //   this.addAction(this.element, `click->${this.identifier}#tabNext`)
  // }

  tab(event) {
    this.tabIndexValue = event.payload.value
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
    this.startViewTransition(() => {
      this.tabTargets.forEach((target) => {
        target.removeAttribute('open')
      })
      this.tabTargets[this.tabIndexValue].setAttribute('open', '')
    })
    if (this.hasRestoreTimeoutParams || this.hasRestoreIndexParams) {
      this.restore({timeout: this.restoreTimeoutParams || 3000, index: this.restoreIndexParams || 0})
    }
  }

  restore({timeout = 3000, index = 0}) {
    setTimeout(() => {
      this.tabIndexValue = index
    }, timeout)
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

}