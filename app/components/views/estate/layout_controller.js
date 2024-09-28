
import { Views_Estate_Footer } from "./footer";
import { Views_Estate_Header } from "./header";
import ApplicationController from "../../../javascript/controllers/application_controller";

export default class Views_Estate_LayoutController extends ApplicationController {
  static targets = ['header', 'main', 'footer']

  init() {
    this.element.className = 'w-full h-full'
    this.initHeader()
    this.initFooter()
    this.initMain()
  }

  initHeader() { this.headerTarget.innerHTML = Views_Estate_Header() }
  initFooter() { this.footerTarget.innerHTML = Views_Estate_Footer() }
}
