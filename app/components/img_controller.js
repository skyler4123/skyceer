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

  initializeHTML() {
    this.element.setAttribute('src', this.url)
    this.element.setAttribute('alt', this.alt)
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
  get src() {
    return this.optionsValue.src
  }
  get url() {
    return this.optionsValue.url || this.src || 'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg'
  }
  get alt() {
    return this.optionsValue.alt
  }
}
