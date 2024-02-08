import ApplicationController from './application_controller'

export default class extends ApplicationController {
  static targets = ['overlay']
  initialize() {
    // console.log("Hello, Stimulus!", this.element);
    // this.initializeTarget()
    this.initializeClass()
  }

  // initializeTarget() {
  // }

  initializeClass() {
    this.element.className = this.twMerge(this.element.className, this.typeClass.klass)
    this.overlayTarget.className = this.twMerge(this.overlayTarget.className, this.typeClass.overlay)
  }

  get typeClass() {
    return {
      klass: 'absolute duration-300 top-0 left-0 ease-in-out',
      overlay: ''
    }
  }
  get parentController() {
    return this.element.closest('[data-controller]')
  }
}
