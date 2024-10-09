import Views_Estate_LayoutController from "../layout_controller";

export default class extends Views_Estate_LayoutController {
  static targets = [...super.targets, "map", "search"]

  initMain() {
    this.initEstateHousesSearch()
    this.initEstateHousesIndexMap()
    this.initConnection()
  }

  initEstateHousesSearch() {
    let openlayersControllerIdentifier = "views--estate--estate-houses--search"
    let openlayersHTML = `<div data-controller='${openlayersControllerIdentifier}'></div>`
    this.mergeHTMLIntoElement(this.searchTarget, openlayersHTML)
  }

  initEstateHousesIndexMap() {
    let openlayersControllerIdentifier = "views--estate--estate-houses--index-map"
    let openlayersHTML = `<div data-controller='${openlayersControllerIdentifier}'></div>`
    this.mergeHTMLIntoElement(this.mapTarget, openlayersHTML)
  }

  initConnection() {
    this.createEventBrige({fromElement: this.searchTarget, toElement: this.mapTarget, toAction: "receiveFromSearch"})
  }

}
