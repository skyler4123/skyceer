import { isEmpty } from "controllers/data_helpers";
import ApplicationController from "controllers/application_controller";


export default class LayoutController extends ApplicationController {

  initialize() {
    window.HTMLData = this.element.innerHTML
    super.initialize()
  }

}
