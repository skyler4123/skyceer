import ApplicationController from "../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  static targets = ["editor"]
  static values = {
    ...super.values,
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
  }

  initComplete() {
    console.log(window.grapesjs)
  }

  variantClass() {
    return {
      default: {
        element: 'w-full h-fit border-2 border-gray-200 rounded-md p-4',
        editorTarget: 'w-full'
      }
    }
  }
}
