import ApplicationController from "../../../javascript/controllers/application_controller";

export default class Views_Application_LayoutController extends ApplicationController {
  static targets = ['header', 'main', 'aside', 'content', 'footer']

  init() {
    this.initHeader()
    this.initFooter()
    if (this.hasMainTarget && this.isDefined(this.initMain)) { this.initMain() }
    if (this.hasAsideTarget && this.isDefined(this.initAside)) { this.initAside() }
    if (this.hasContentTarget && this.isDefined(this.initContent)) { this.initContent() }
  }

  initHeader() {
    this.headerTarget.setAttribute('data-controller', "views--application--header")
  }
  initMain() {
    this.mainTarget.setAttribute('data-controller', "views--application--main")
  }
  initAside() {
    this.asideTarget.setAttribute('data-controller', "views--application--aside")
  }
  initFooter() {
    this.footerTarget.setAttribute('data-controller', "views--application--footer")
  }

}
