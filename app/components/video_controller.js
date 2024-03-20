import ApplicationController from "../javascript/controllers/application_controller";

export default class VideoController extends ApplicationController {
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    this.initializeHTML()
    this.initializeComplete()
  }

  initializeHTML() {
    this.element.innerHTML = this.initHTML
  }

  initializeAction() {
    super.initializeAction()
    if (this.isControl) {
      this.element.setAttribute('controls', '')
    }
    if (this.isAutoplay) {
      this.element.setAttribute('autoplay', '')
    }
    if (this.isMuted) {
      this.element.setAttribute('muted', '')
    }
  }

  get typeClass() {
    return {
      'video/mp4': {
        element: 'w-full'
      }
    }
  }
  get videoClass() {
    return this.paramsValue.videoClass
  }
  get isControl() {
    return this.paramsValue.isControl || true
  }
  get isAutoplay() {
    return this.paramsValue.isAutoplay || false
  }
  get isMuted() {
    return this.paramsValue.isMuted || false
  }
  get src() {
    return this.paramsValue.src
  }
  get url() {
    return this.paramsValue.url || this.src || 'https://flowbite.com/docs/videos/flowbite.mp4'
  }
  get type() {
    return this.paramsValue.type || 'video/mp4'
  }
  get initHTML() {
    return `
      <source src="${this.url}" type="${this.type}">
    `
  }


}