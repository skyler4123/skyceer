import ApplicationController from "../application_controller";

export default class extends ApplicationController {
  static values = {
    class: { type: String, default: "relative flex flex-row w-full h-full" }
  }
  // connect() {
  //   console.log("Hello, Stimulus!", this.element);
  // }
}
