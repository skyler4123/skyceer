import ApplicationController from "../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  init() {
    this.initHTML()
  }

  initHTML() {
    const html = `
      <div>English Header</div>
    `
    this.element.innerHTML = html
  }
}
