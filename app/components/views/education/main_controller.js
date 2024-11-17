import ApplicationController from "../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  static values = {
    className: { type: String, default: "flex flex-row" }
  }
  // connect() {
  //   console.log("Hello, Stimulus!", this.element);
  // }
}
