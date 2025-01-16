import ApplicationController from "../application_controller"

export default class Education_FooterController extends ApplicationController {
  static values = {
    class: { type: String, default: "flex flex-row w-full h-full justify-between items-center py-4 px-20 mt-4 border-t-2" }
  }

  init() {
    this.initHTML()
  }

  initHTML() {
    this.element.innerHTML = this.defaultHTML()
  }

  defaultHTML() {
    return `
      <div data-controller="application--logo"></div>
      <div>Home</div>
      <div>Estate</div>
      <div>About</div>
      <div>Contact</div>
    `
  }
}
