
import ApplicationController from "../../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  static targets = ['header', 'main', 'footer']

  init() {
    console.log(this.identifier)
  }
}
