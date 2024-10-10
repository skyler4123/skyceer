import ApplicationController from "../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  init() {
    this.initHTML()
  }

  initHTML() {
    this.parentElement.innerHTML = this.defaultHTML()
  }

  defaultHTML() {
    return `
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
      <div class="flex flex-row justify-between">
        Footer
      </div>
    `
  }
}
