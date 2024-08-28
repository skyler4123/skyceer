
import { footer } from "./footer";
import { header } from "./header";
import ApplicationController from "../../../javascript/controllers/application_controller";

export default class RsCondosLayoutController extends ApplicationController {
  static targets = ['header', 'main', 'footer']

  init() {
    this.element.className = 'w-full h-full'
    this.initHeader()
    this.initFooter()
    this.initMain()
  }

  initHeader() { this.headerTarget.innerHTML = header() }
  initFooter() { this.footerTarget.innerHTML = footer() }
}
