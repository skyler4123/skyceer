import ApplicationComponentController from './application_component_controller';

export default class ModalComponentController extends ApplicationComponentController {
  static targets = ['background', 'content']
  static values = {
    ...super.values,
    isOpen: { type: Boolean, default: false },
  }

  initialize() {
    super.initialize()
    this.initializeComplete()
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

  get typeClass() {
    return {
      default: {
        element: 'fixed top-0 hidden open:flex animate-fade-in',
        backgroundTarget: 'w-screen h-screen bg-gray-300/50 cursor-pointer',
        contentTarget: 'absolute z-30 flex justify-center items-center w-fit h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      }
    }
  }
  get isShowAfterInitialize() {
    return false
  }
}