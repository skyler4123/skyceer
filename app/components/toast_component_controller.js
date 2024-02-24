import ApplicationComponentController from './application_component_controller';

export default class ToastComponentController extends ApplicationComponentController {
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    // this.initializeClass()
    // this.initializeAction()

    this.initializeComplete()
  }

  initializeClass() {
    this.element.className = this.twMerge('w-1/3 h-5/6 bg-gray-200 rounded-lg text-black shadow-lg shadow-gray-500/50', this.element.className, this.positionClass[this.position], this.klass)
  }

  get position() {
    return this.optionsValue.position || 'left'
  }
  get positionClass() {
    return {
      'left': 'fixed top-1/2 -left-1/2 z-20 -translate-x-full -translate-y-1/2 duration-200 ease-out open:translate-x-0 open:left-2 p-4',
      'right': 'fixed top-1/2 -right-1/2 z-20 translate-x-full -translate-y-1/2 duration-200 ease-out open:translate-x-0 open:right-2 p-4',
      'top': 'fixed -top-1/2 right-1/2 z-20 -translate-x-1/2 -translate-y-full duration-200 ease-out open:translate-y-0 open:top-2 p-4',
      'bottom': 'fixed -bottom-1/2 right-1/2 z-20 -translate-x-1/2 translate-y-full duration-200 ease-out open:translate-y-0 open:bottom-2 p-4',
    }
  }


}