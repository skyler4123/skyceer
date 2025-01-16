import ApplicationController from "../../application_controller"
import Education_FooterController from "../footer_controller"
import Education_HeaderController from "../header_controller"
import Education_MainController from "../main_controller"
import Education_School_AsideController from "./aside_controller"

export default class Education_School_LayoutController extends ApplicationController {
  static targets = ['header', 'main', 'aside', 'content', 'footer']
  static values = {
    class: { type: Object, default: {
      content: "grow",
    } }
  }

  initLayout() {
    this.initHeader()
    this.initFooter()
    if (this.hasMainTarget && this.isDefined(this.initMain)) { this.initMain() }
    if (this.hasAsideTarget && this.isDefined(this.initAside)) { this.initAside() }
    if (this.hasContentTarget && this.isDefined(this.initContent)) { this.initContent() }
  }

  initHeader() {
    this.headerTarget.setAttribute('data-controller', Education_HeaderController.identifier)
  }
  initMain() {
    this.mainTarget.setAttribute('data-controller', Education_MainController.identifier)
  }
  initAside() {
    this.asideTarget.setAttribute('data-controller', Education_School_AsideController.identifier)
  }
  initFooter() {
    this.footerTarget.setAttribute('data-controller', Education_FooterController.identifier)
  }

}
