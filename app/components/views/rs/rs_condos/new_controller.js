import Views_Rs_LayoutController from "../layout_controller";

export default class extends Views_Rs_LayoutController {
  static targets = [...super.targets, "form", "map"]

  initMain() {
    this.initForm()
    this.initRsCondosNewMap() 
  }

  initForm() {
    this.formTarget.dataset.controller = "views--rs--rs-condos--form"
  }

  initRsCondosNewMap() {
    let openlayersControllerIdentifier = "libs--map--openlayers--new"
    let openlayersHTML = `<div data-controller='${openlayersControllerIdentifier}' data-${openlayersControllerIdentifier}-target="map" data-action="click->${this.identifier}#syncCoordinates"></div>`
    this.mergeHTMLIntoElement(this.mapTarget, openlayersHTML)
  }

  syncCoordinates() {
    setTimeout(() => {
      this.formController().longitudeInputTarget.value = this.mapController().pointValue.longitude
      this.formController().latitudeInputTarget.value = this.mapController().pointValue.latitude
    }, 500)
  }

  mapController() {
    return this.application.getControllerForElementAndIdentifier(this.mapTarget, 'libs--map--openlayers--new')
  }

  formController() {
    return this.application.getControllerForElementAndIdentifier(this.formTarget, "views--rs--rs-condos--form")
  }
}
