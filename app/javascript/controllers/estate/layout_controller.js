import ApplicationController from "../application_controller"

export default class Estate_LayoutController extends ApplicationController {
  static targets = ['header', 'main', 'footer']

  init() {
    this.initContent()
  }

}
