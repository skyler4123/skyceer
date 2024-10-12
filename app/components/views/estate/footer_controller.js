import ApplicationController from "../../../javascript/controllers/application_controller";
import { Application_Logo } from "../application/logo";

export default class extends ApplicationController {
  init() {
    this.initHTML()
  }

  initHTML() {
    this.element.innerHTML = this.defaultHTML()
  }

  defaultHTML() {
    return `
      <div class="flex flex-row justify-between items-center py-4 px-20 mt-4 border-t-2">
        <div>${Application_Logo()}</div>
        <div>Home</div>
        <div>Estate</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    `
  }
}
