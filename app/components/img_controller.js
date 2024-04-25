import ApplicationController from "../javascript/controllers/application_controller";

export default class ImgController extends ApplicationController {
  static values = {
    ...super.values,
  }

  init() {
    this.initHTML()
  }

  initParams() {
    this.setParams({name: 'src', defaultValue: 'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg'})
    this.setParams({name: 'url', defaultValue: this.srcParams})
  }
  
  initHTML() {
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
}
