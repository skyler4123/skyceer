
import ApplicationController from './application_controller'

export default class extends ApplicationController {

  // initialize() {
  //   super.initialize()
  //   this.initializeComplete()
  // }

  initAction() {
    // super.initializeAction()
    this.element.dataset.action = (this.element.dataset.action || '') + ` click->${this.identifier}#darkmode`
  }

  darkmode() {
    this.htmlTag.classList.toggle('dark')
  }

}
