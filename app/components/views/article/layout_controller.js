
import { Views_Article_Footer } from "./footer";
import { Views_Article_Header } from "./header";
import ApplicationController from "../../../javascript/controllers/application_controller";

export default class Views_Article_LayoutController extends ApplicationController {
  static targets = ['header', 'main', 'footer']

  init() {
    this.element.className = 'w-full h-full'
    this.initHeader()
    this.initFooter()
    this.initMain()
  }

  initHeader() { this.headerTarget.innerHTML = Views_Article_Header() }
  initFooter() { this.footerTarget.innerHTML = Views_Article_Footer() }
}
