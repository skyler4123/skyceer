import ApplicationController from "../../application_controller";

// Connects to data-controller="education--home--index"
export default class extends ApplicationController {
  static values = {
    class: { type: Object, default: {
      element: "w-full",
      content: "w-full flex flex-col justify-center items-center"
    } }
  }

  connect() {
    // console.log(this.element)
  }

}
