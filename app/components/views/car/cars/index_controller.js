import ApplicationController from "../../../../javascript/controllers/application_controller";
import { carLayout } from "../layout";
import { carSearch } from "../search";

export default class extends ApplicationController {
  static targets = ['search', 'map']
  static values = {
    search: { type: Object, default: {} }
  }

  init() {
    this.initHTML()
  }

  initHTML() {
    this.element.className = 'flex flex-col justify-center items-center w-full h-full'
    this.element.innerHTML =
      carLayout(
        `
          <main>
            ${carSearch({identifier: this.identifier})}
            <div data-controller="views--car--map-car-index" data-${this.identifier}-target="map"></div>
          </main>
        `
      )
  }
  
  initAction() {
    this.addAction(this.searchTarget, `submit->${this.identifier}#submit`)
  }

  submit(event) {
    event.preventDefault()
    var formData = new FormData(this.searchTarget)
    const formObject = Object.fromEntries(formData.entries())
    this.mapController().fetchParamsValue = formObject
  }

  mapController() {
    return this.application.getControllerForElementAndIdentifier(this.mapTarget, 'views--car--map-car-index')
  }
}
