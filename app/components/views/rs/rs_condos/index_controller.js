// import { Controller } from "@hotwired/stimulus";
import ApplicationController from "../../../../javascript/controllers/application_controller";
import { footer } from "../footer";
import { header } from "../header";

export default class extends ApplicationController {
  static targets = ['header', 'main', 'map', 'footer']

  init() {
    this.element.className = 'w-full h-full'
    this.initHeader()
    this.initMain()
    this.initFooter()
  }

  initHeader() { this.headerTarget.innerHTML = header() }
  initFooter() { this.footerTarget.innerHTML = footer() }

  initMain() {
    this.initRsCondosIndexMap()
  }

  initRsCondosIndexMap() {
    let openlayersHTML = `<div data-controller='${this.openlayersControllerIdentifier()}'></div>`
    this.mergeHTMLIntoElement(this.mapTarget, openlayersHTML)
  }

  openlayersControllerIdentifier() {
    return "views--rs--rs-condos--index-map"
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
