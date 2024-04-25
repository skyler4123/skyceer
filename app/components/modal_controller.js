import ApplicationController from "../javascript/controllers/application_controller";

export default class ModalController extends ApplicationController {
  static targets = ['background', 'content']
  static values = {
    ...super.values,
    isOpen: { type: Boolean, default: false },
  }

  initParams() {
    this.setParams({name: 'type', defaultValue: 'default'})
    this.setParams({name: 'isShowAfterInitialize', defaultValue: false})
  }

  initAction() {
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

  get typeClass() {
    return {
      default: {
        element: 'fixed top-0 hidden open:flex animate-fade-in',
        backgroundTarget: 'w-screen h-screen bg-gray-300/50 cursor-pointer',
        contentTarget: 'absolute z-30 flex justify-center items-center w-fit h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      }
    }
  }
}