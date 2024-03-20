import ApplicationController from "../javascript/controllers/application_controller";

export default class LinkController extends ApplicationController {
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    this.initializeHTML()
    this.initializeComplete()
  }

  initializeHTML() {
    if (this.hasLabel) { this.element.innerHTML = this.label }
    this.element.href = this.url
  }
  
  copyLink() {
    window.navigator.clipboard.writeText(this.url)
  }

  get url() {
    return this.paramsValue.url || '/#'
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
