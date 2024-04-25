import ApplicationController from "../javascript/controllers/application_controller";

export default class LinkController extends ApplicationController {
  static values = {
    ...super.values,
  }

  init() {
    this.initHTML()
  }

  initParams() {
    this.setParams({name: 'url', defaultValue: '/#'})
  }

  initHTML() {
    if (this.hasLabelParams) { this.element.innerHTML = this.labelParams }
    this.element.href = this.urlParams
  }
  
  copyLink() {
    window.navigator.clipboard.writeText(this.urlParams)
  }

  get variantClass() {
    return {
      default: {
        element: 'font-medium text-blue-600 dark:text-blue-500 hover:underline',
      },
      button: {
        element: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      }
    }
  }
  
}
