import { twMerge } from 'tailwind-merge'
import ApplicationComponentController from './application_component_controller';

export default class extends ApplicationComponentController {
  static targets = ['background', 'content']
  static values = {
    ...super.values,
    isOpen: { type: Boolean, default: false },
  }

  initialize() {
    super.initialize()
    this.initializeClass()
    this.initializeAction()

    this.initializeComplete()
  }
  initializeComplete() {}

  initializeClass() {
    this.element.className = twMerge("fixed top-0 hidden open:flex animate-fade-in", this.element.className , this.klass)
    this.backgroundTarget.className = twMerge('w-screen h-screen bg-gray-300/50 cursor-pointer', this.backgroundTarget.className, this.backgroundClass)
    this.contentTarget.className = twMerge('absolute z-30 flex justify-center items-center w-fit h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', this.contentTarget.className, this.contentClass)
  }

  initializeAction() {
    super.initializeAction()
    this.backgroundTarget.dataset.action = (this.backgroundTarget.dataset.action || '') + ' ' + `click->${this.identifier}#close`
  }


  isOpenValueChanged(value, previousValue) {
    super.isOpenValueChanged(value, previousValue)
    if (this.isOpenValue) {
      this.backgroundTarget.setAttribute('open', '')
      this.contentTarget.setAttribute('open', '')
    } else {
      this.backgroundTarget.removeAttribute('open')
      this.contentTarget.removeAttribute('open')
    }
  }

  get backgroundClass() {
    return this.optionsValue.backgroundClass
  }
  get contentClass() {
    return this.optionsValue.contentClass
  }

}