import Views_Estate_LayoutController from "../layout_controller";

export default class extends Views_Estate_LayoutController {
  static targets = [...super.targets, "map", "search"]

  initMain() {
    this.initEstateCondosSearch()
    this.initEstateCondosIndexMap()
    this.initConnection()
  }

  initEstateCondosSearch() {
    let openlayersControllerIdentifier = "views--estate--estate-condos--search"
    let openlayersHTML = `<div data-controller='${openlayersControllerIdentifier}'></div>`
    this.mergeHTMLIntoElement(this.searchTarget, openlayersHTML)
  }

  initEstateCondosIndexMap() {
    let openlayersControllerIdentifier = "views--estate--estate-condos--index-map"
    let openlayersHTML = `<div data-controller='${openlayersControllerIdentifier}'></div>`
    this.mergeHTMLIntoElement(this.mapTarget, openlayersHTML)
  }

  initConnection() {
    this.createEventBrige({fromElement: this.searchTarget, toElement: this.mapTarget, toAction: "receiveFromSearch"})
  }

}
