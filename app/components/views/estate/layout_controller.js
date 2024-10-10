import ApplicationController from "../../../javascript/controllers/application_controller";

export default class Views_Estate_LayoutController extends ApplicationController {
  static targets = ['header', 'main', 'footer']

  init() {
    this.element.className = 'w-full h-full'
    this.initHeader()
    this.initFooter()
    this.initMain()
  }

  initHeader() {
    this.headerTarget.innerHTML = `<div data-controller="views--estate--header"></div>`
  }
  initFooter() {
    this.footerTarget.innerHTML = `<div data-controller="views--estate--footer"></div>`
  }
}
