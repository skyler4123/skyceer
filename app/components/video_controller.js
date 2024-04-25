import ApplicationController from "../javascript/controllers/application_controller";

export default class VideoController extends ApplicationController {
  static values = {
    ...super.values,
  }

  init() {
    this.initHTML()
  }

  initParams() {
    this.setParams({name: 'type', defaultValue: 'video/mp4'})
    this.setParams({name: 'isControl', defaultValue: true})
    this.setParams({name: 'isAutoplay', defaultValue: false})
    this.setParams({name: 'isMuted', defaultValue: false})
    this.setParams({name: 'url', defaultValue: this.srcParams || 'https://flowbite.com/docs/videos/flowbite.mp4'})
  }

  initHTML() {
    this.element.innerHTML = this.typeHTML
  }

  initAction() {
    if (this.hasIsControlParams && this.isControllParams) {
      this.element.setAttribute('controls', '')
    }
    if (this.hasIsAutoplayParams && this.isAutoplayParams) {
      this.element.setAttribute('autoplay', '')
    }
    if (this.hasIsMutedParams && this.isMutedParams) {
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

  get typeHTML() {
    return `
      <source src="${this.urlParams}" type="${this.typeParams}">
    `
  }


}