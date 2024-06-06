import ApplicationController from "../../../../javascript/controllers/application_controller";
import { header } from "../header";
import { footer } from "../footer";

export default class extends ApplicationController {
  static targets = ['header', 'main', 'footer']

  init() {
    this.element.className = 'w-full h-full'
    this.initHeader()
    this.initFooter()
  }

  initHeader() { this.headerTarget.innerHTML = header() }
  initFooter() { this.footerTarget.innerHTML = footer() }

}
