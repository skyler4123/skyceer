import { twMerge } from 'tailwind-merge'
import ApplicationComponentController from './application_component_controller';

export default class extends ApplicationComponentController {
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    this.initializeHTML()
    this.initializeClass()
    this.initializeAction()

    this.initializeComplete()
  }

  initializeHTML() {
    if (this.dir) {
      this.element.setAttribute('dir', this.dir)
    }
    this.element.innerHTML = this.initHTML
  }

  initializeClass() {
    this.element.className = twMerge('w-full', this.element.className, this.klass)
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

  get videoClass() {
    return this.optionsValue.videoClass
  }
  get isControl() {
    return this.optionsValue.isControl || true
  }
  get isAutoplay() {
    return this.optionsValue.isAutoplay || false
  }
  get isMuted() {
    return this.optionsValue.isMuted || false
  }
  get src() {
    return this.optionsValue.src
  }
  get url() {
    return this.optionsValue.url || this.src || 'https://flowbite.com/docs/videos/flowbite.mp4'
  }
  get type() {
    return this.optionsValue.type || 'video/mp4'
  }
  get initHTML() {
    return `
      <source src="${this.url}" type="${this.type}">
    `
  }


}