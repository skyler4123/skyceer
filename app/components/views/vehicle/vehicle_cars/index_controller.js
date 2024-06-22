import ApplicationController from "../../../../javascript/controllers/application_controller";
import { header } from "../header";
import { footer } from "../footer";
import { search } from "../search";

export default class extends ApplicationController {
  static targets = ['header', 'main', 'footer', 'search', 'map']
  static values = {
    search: { type: Object, default: {} }
  }

  init() {
    this.element.className = 'w-full h-full'
    this.initHeader()
    this.initMain()
    this.initFooter()
  }

  initHeader() {
    this.headerTarget.innerHTML = header()
  }
  initFooter() {
    this.footerTarget.className = "flex flex-col w-full px-10"
    this.footerTarget.innerHTML = footer()
  }

  initMain() {
    this.mainTarget.className = 'flex flex-col justify-center items-center w-full h-full'
    this.mainTarget.innerHTML =
      `
        ${search({identifier: this.identifier})}
        <div data-controller="views--vehicle--map-car-index" data-${this.identifier}-target="map"></div>
      `
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
    return this.application.getControllerForElementAndIdentifier(this.mapTarget, 'views--vehicle--map-car-index')
  }
}
