import ApplicationController from "../../../javascript/controllers/application_controller";

export default class Views_Education_LayoutController extends ApplicationController {
  static targets = ['header', 'main', 'aside', 'content', 'footer']

  init() {
    this.initHeader()
    this.initFooter()
    if (this.hasMainTarget && this.isDefined(this.initMain)) { this.initMain() }
    if (this.hasAsideTarget && this.isDefined(this.initAside)) { this.initAside() }
    if (this.hasContentTarget && this.isDefined(this.initContent)) { this.initContent() }
  }

  initHeader() {
    this.headerTarget.setAttribute('data-controller', "views--education--header")
  }
  initFooter() {
    this.footerTarget.setAttribute('data-controller', "views--education--footer")
  }

}
