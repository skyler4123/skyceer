import ApplicationController from "../../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  static targets = ['header', 'main', 'content', 'footer']

  static values = {
    class: { type: Object, default: {
      element: 'flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white',
      header: "",
      main: "flex flex-col items-center w-full h-full",
      content: "flex flex-col items-center w-full h-hull"
    }}
  }
  
  connect() {
    console.log("Hello, Stimulus!", this.element);
  }
}
