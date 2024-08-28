import RsCondosLayoutController from "../layout_component_controller";

export default class extends RsCondosLayoutController {
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
