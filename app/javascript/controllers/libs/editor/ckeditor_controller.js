import ApplicationController from "../../application_controller";

export default class extends ApplicationController {
  connect() {
    console.log("Hello, Stimulus!", this.element);
  }
}