import ApplicationController from "../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  init() {
    this.initHTML()
  }

  initHTML() {
    this.element.innerHTML = this.defaultHTML()
  }

  defaultHTML() {
    return `
      <div class="flex flex-row justify-between items-center p-4 mt-4 border-t-2">
        Footer
      </div>
    `
  }
}
