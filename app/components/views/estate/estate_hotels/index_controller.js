import Views_Estate_LayoutController from "../layout_controller";

export default class extends Views_Estate_LayoutController {
  static targets = [...super.targets, "map"]

  initMain() {
    this.initEstateCondosIndexMap()
  }

  initEstateCondosIndexMap() {
    let openlayersControllerIdentifier = "views--estate--estate-hotels--index-map"
    let openlayersHTML = `<div data-controller='${openlayersControllerIdentifier}'></div>`
    this.mergeHTMLIntoElement(this.mapTarget, openlayersHTML)
  }
}
