import "axios";
import ApplicationController from "../application_controller";

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

  initAction() {
    if (this.methodParams) {
      this.addAction(this.element, `click->${this.identifier}#send`)
    }
  }

  async send(event) {
    const response = await axios({
      method: this.methodParams,
      url: this.urlParams,
      headers: {...this.defaultHeaders()},
      data: event.params ?? null
    })
    const { status } = response
    if (status === 204) {
      this.redirectTo('/vehicle_cars')
    }
  }

  initHTML() {
    if (this.hasLabelParams) { this.element.innerHTML = this.labelParams }
    this.element.href = this.urlParams
  }
  
  copyLink() {
    window.navigator.clipboard.writeText(this.urlParams)
  }

  variantClass() {
    return {
      default: {
        element: 'font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer',
      },
      button: {
        element: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      }
    }
  }
  
}
