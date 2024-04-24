import ApplicationController from "../javascript/controllers/application_controller";

export default class TabController extends ApplicationController {
  static targets = ["tab"]
  static values = {
    ...super.values,
    tabIndex: { type: Number }
  }

  init() {
    // super.init()
    this.initTarget()
    // this.initComplete()
  }

  initParams() {
    // super.initParams()
    this.setParams({name: 'type', defaultValue: 'default'})
    this.setParams({name: 'isRestore', defaultValue: false})
    this.setParams({name: 'restoreIndex', defaultValue: 0})
    this.setParams({name: 'restoreTimeout', defaultValue: 5000})
  }

  initTarget() {
    Array.from(this.element.children).forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, 'tab')
    })
  }

  initAction() {
    // super.initAction()
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

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        this.tabTargets.forEach((target) => {
          target.removeAttribute('open')
        })
        this.tabTargets[this.tabIndexValue].setAttribute('open', '')
        if (this.isRestoreParams && previousValue !== undefined) {
          setTimeout(() => {
            this.tabIndexValue = this.restoreIndexParams
          }, this.restoreTimeoutParams)
        }
      })
    } else {
      this.tabTargets.forEach((target) => {
        target.removeAttribute('open')
      })
      this.tabTargets[this.tabIndexValue].setAttribute('open', '')
      if (this.isRestoreParams && previousValue !== undefined) {
        setTimeout(() => {
          this.tabIndexValue = this.restoreIndexParams
        }, this.restoreTimeoutParams)
      }
    }
  }

  // get type() {
  //   return this.paramsValue.type || 'default'
  // }
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
  // get isRestore() {
  //   if (typeof this.paramsValue.restoreIndex != "undefined" || typeof this.paramsValue.restoreTimeout != "undefined") {
  //     return true
  //   }
  //   return this.paramsValue.isRestore
  // }
  // get restoreIndex() {
  //   return this.paramsValue.restoreIndex || 0
  // }
  // get restoreTimeout() {
  //   return this.paramsValue.restoreTimeout || 5000
  // }
}