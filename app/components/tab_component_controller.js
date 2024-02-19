import morphdom from "morphdom"
import ApplicationComponentController from './application_component_controller';

export default class TabComponentController extends ApplicationComponentController {
  static targets = ["tab"]
  static values = {
    ...super.values,
    tabIndex: { type: Number }
  }

  initialize() {
    super.initialize()
    this.initializeTarget()
    this.initializeClass()
    this.initializeAction()

    this.initializeComplete()
  }

  initializeTarget() {
    Array.from(this.element.children).forEach((target) => {
      morphdom(target, this.initTarget(target.outerHTML))
      // target.setAttribute(`data-${this.identifier}-target`, 'tab')
    })
  }

  initializeClass() {
    this.element.className = this.twMerge(this.element.className, this.klass)
    this.tabTargets.forEach((target) => {
      target.className = this.twMerge('hidden open:flex', target.className, this.tabClass)
    })
  }

  initTarget(contentHTML) {
    return `
      <div data-${this.identifier}-target="tab">
        ${contentHTML}
      </div>
    `
  }

  tab(event) {
    this.tabIndexValue = event.value
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

  get tabClass() {
    return this.optionsValue.tabClass
  }
  get maxIndex() {
    return this.tabTargets.length - 1
  }
  get isRestore() {
    if (typeof this.optionsValue.restoreIndex != "undefined" || typeof this.optionsValue.restoreTimeout != "undefined") {
      return true
    }
    return this.optionsValue.isRestore
  }
  get restoreIndex() {
    return this.optionsValue.restoreIndex || 0
  }
  get restoreTimeout() {
    return this.optionsValue.restoreTimeout || 5000
  }
}