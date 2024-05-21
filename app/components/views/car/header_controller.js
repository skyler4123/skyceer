import ApplicationController from "../../../javascript/controllers/application_controller";
import { button } from "../../../javascript/controllers/components";

export default class extends ApplicationController {
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  init() {
    this.element.innerHTML = `
      <div>Headerrrrrrrrrrrrrrrrrrrrrrrrrrrr</div>
      ${button({label: 'Button'})}
    `
  }
}
