import Views_Estate_LayoutController from "../layout_controller";

export default class extends Views_Estate_LayoutController {
  static targets = [...super.targets, "map", "search"]

  initMain() {
    this.initEstateHomesSearch()
    this.initEstateHomesIndexMap()
    this.initConnection()
  }

  initEstateHomesSearch() {
    let openlayersControllerIdentifier = "views--estate--estate-homes--search"
    let openlayersHTML = `<div data-controller='${openlayersControllerIdentifier}'></div>`
    this.mergeHTMLIntoElement(this.searchTarget, openlayersHTML)
  }

  initEstateHomesIndexMap() {
    let openlayersControllerIdentifier = "views--estate--estate-homes--index-map"
    let openlayersHTML = `<div data-controller='${openlayersControllerIdentifier}'></div>`
    this.mergeHTMLIntoElement(this.mapTarget, openlayersHTML)
  }

  initConnection() {
    this.createEventBrige({fromElement: this.searchTarget, toElement: this.mapTarget, toAction: "receiveFromSearch"})
  }

}
