import Views_Rs_LayoutController from "../layout_controller";

export default class extends Views_Rs_LayoutController {
  static targets = [...super.targets, "map", "search"]

  initMain() {
    this.initRsCondosSearch()
    this.initRsCondosIndexMap()
    this.initConnection()
  }

  initRsCondosSearch() {
    let openlayersControllerIdentifier = "views--rs--rs-condos--search"
    let openlayersHTML = `<div data-controller='${openlayersControllerIdentifier}'></div>`
    this.mergeHTMLIntoElement(this.searchTarget, openlayersHTML)
  }

  initRsCondosIndexMap() {
    let openlayersControllerIdentifier = "views--rs--rs-condos--index-map"
    let openlayersHTML = `<div data-controller='${openlayersControllerIdentifier}'></div>`
    this.mergeHTMLIntoElement(this.mapTarget, openlayersHTML)
  }

  initConnection() {
    setTimeout(() => {
      this.addAction(this.mapTarget, `${this.searchTarget.id}@window->${this.rawIdentifier(this.mapTarget)}#receive`)
  
    }, 2000)
    // event['payload'] = { ...this.getEventWithAction('close'), controller: this }
    // this.dispatch('dispatch', { detail: { event: event } })
  }

}
