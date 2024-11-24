import ApplicationController from "../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
  }

  init() {
    this.initHTML()
  }

  initHTML() {
    this.element.innerHTML = this.defaultHTML()
  }

  defaultHTML() {
    return `
      <div data-controller="views--application--logo"></div>
      <div>Home</div>
      <div>Estate</div>
      <div>About</div>
      <div>Contact</div>
    `
  }

  variantClass() {
    return {
      default: {
        element: 'flex flex-row w-full h-full justify-between items-center py-4 px-20 mt-4 border-t-2'
      }
    }
  }
}
