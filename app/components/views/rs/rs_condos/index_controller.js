// import { Controller } from "@hotwired/stimulus";
import { RsCondosApi } from "../../../../javascript/controllers/api/rs/rs_condos_api";
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


  async initMain() {
    const res = await RsCondosApi.index()
    let points = res.data
    this.mapTarget.setAttribute('data-libs--map--openlayers--index-params-value', JSON.stringify(this.openlayersParams(points)))
    this.mapTarget.innerHTML = `<div data-libs--map--openlayers--index-target="map">`
    this.mapTarget.setAttribute('data-controller', 'libs--map--openlayers--index')
  }

  openlayersParams(points) {
    return {
      variant: 'default',
      iconUrl: 'https://www.svgrepo.com/show/533501/house-chimney-floor.svg',
      points: points,
      viewCenter: [0, 0],
      viewZoom: 2,
    }
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }

  // openlayersController() {
  //   return this.application.getControllerForElementAndIdentifier(this.mapTarget, 'libs--map--openlayers--index')
  // }

  // initOpenlayers() {
  //   this.openlayersController().pointStyleTextFunction = (point) => {
  //     return {
  //       font: '16px sans-serif',
  //       text: point.name,
  //       textAlign: 'center',
  //       offsetY: -25,
  //       fill: new this.Fill({
  //         color: [255, 255, 255, 1],
  //       }),
  //       backgroundFill: new this.Fill({
  //         color: [168, 50, 153, 0.6],
  //       }),
  //       padding: [2,2,2,2]
  //     }
  //   }
  // }
}
