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
    this.mapTarget.innerHTML = `<div data-controller="libs--map--openlayers--index" data-libs--map--openlayers--index-params-value='${JSON.stringify(this.openlayersParams(points))}'><div data-libs--map--openlayers--index-target="map"></div></div>`
  }

  openlayersParams(points) {
    return {
      variant: 'default',
      iconUrl: 'https://www.svgrepo.com/show/533501/house-chimney-floor.svg',
      points: points,
      viewCenter: [0, 0],
      viewZoom: 4,
    }
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }

}
