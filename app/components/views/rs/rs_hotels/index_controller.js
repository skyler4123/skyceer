import Views_Rs_LayoutController from "../layout_controller";

export default class extends Views_Rs_LayoutController {
  static targets = [...super.targets, "map"]

  initMain() {
    this.initRsCondosIndexMap()
  }

  initRsCondosIndexMap() {
    let openlayersControllerIdentifier = "views--rs--rs-condos--index-map"
    let openlayersHTML = `<div data-controller='${openlayersControllerIdentifier}'></div>`
    this.mergeHTMLIntoElement(this.mapTarget, openlayersHTML)
  }
}
