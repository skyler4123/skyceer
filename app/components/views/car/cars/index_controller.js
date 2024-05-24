import ApplicationController from "../../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  static targets = ['formSearch', 'map']
  static values = {
    search: { type: Object, default: {} }
  }
  // connect() {
  //   console.log("Hello, Stimulus!", this.element);
  // }

  init() {
    // console.log(this.formSearchTarget)
  }

  initAction() {
    this.addAction(this.formSearchTarget, `submit->${this.identifier}#submit`)
  }

  submit(event) {
    event.preventDefault()
    var formData = new FormData(this.formSearchTarget)
    const formObject = Object.fromEntries(formData.entries())
    this.mapController().fetchParamsValue = formObject
  }

  mapController() {
    return this.application.getControllerForElementAndIdentifier(this.mapTarget, 'views--car--map-car-index')
  }
}
