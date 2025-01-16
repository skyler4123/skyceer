import ApplicationController from "../application_controller";

export default class Education_MainController extends ApplicationController {
  static values = {
    class: { type: String, default: "relative flex flex-row w-full h-full" }
  }
  // connect() {
  //   console.log("Hello, Stimulus!", this.element);
  // }
}
