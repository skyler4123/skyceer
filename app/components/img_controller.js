import ApplicationController from "../javascript/controllers/application_controller";

export default class ImgController extends ApplicationController {
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    this.initializeHTML()
    this.initializeComplete()
  }

  initializeParams() {
    super.initializeParams()
    this.urlParams ||= this.srcParams ||= 'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg'
  }
  initializeHTML() {
    this.element.setAttribute('src', this.urlParams)
    this.element.setAttribute('alt', this.altParams)
  }

  rotate() {
    this.isOpenValue = !this.isOpenValue
  }

  get typeClass() {
    return {
      avatar: {
        element: 'rounded-full object-cover'
      }
    }
  }
  // get src() {
  //   return this.paramsValue.src
  // }
  // get url() {
  //   return this.paramsValue.url || this.src || 'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg'
  // }
  // get alt() {
  //   return this.paramsValue.alt
  // }
}
