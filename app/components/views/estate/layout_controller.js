import ApplicationController from "../../../javascript/controllers/application_controller";

export default class Views_Estate_LayoutController extends ApplicationController {
  static targets = ['header', 'main', 'footer']

  init() {
    this.initHeader()
    this.initFooter()
    this.initMain()
  }

  initHeader() {
    this.headerTarget.setAttribute('data-controller', "views--estate--header")
  }
  initFooter() {
    this.footerTarget.setAttribute('data-controller', "views--estate--footer")
  }
}
