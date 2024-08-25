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
    let openlayersHTML = `
      <div data-controller='${this.openlayersControllerIdentifier()}' data-${this.openlayersControllerIdentifier()}-params-value='${JSON.stringify(this.openlayersParams(points))}' data-${this.openlayersControllerIdentifier()}-can-initialize-value="false">
        <div data-${this.openlayersControllerIdentifier()}-target="map"></div>
      </div>
    `
    this.mergeHTMLIntoElement(this.mapTarget, openlayersHTML)
    setTimeout(() => {
      this.openlayersController().pointStyleTextFunction = (point) => {
        let Fill = this.openlayersController().Fill
        return {
          font: '16px sans-serif',
          text: point.price_cents.toString(),
          textAlign: 'center',
          offsetY: -25,
          fill: new Fill({
            color: [255, 255, 255, 1],
          }),
          backgroundFill: new Fill({
            color: [168, 50, 153, 0.6],
          }),
          padding: [2,2,2,2]
        }
      }
      this.openlayersController().canInitializeValue = true
    }, 2000)
    setTimeout(() => {
      this.map = this.openlayersController().map
      console.log(this.map)
      this.map.on("pointermove", (event) => {
        const feature = this.openlayersController().pointsSource.getClosestFeatureToCoordinate(event.coordinate)
        const isNear = this.openlayersController().isNearFromEventToPointFeature({event: event, feature: feature})
        if (isNear) {
          this.map.getViewport().style.cursor = "pointer"
        } else {
          this.map.getViewport().style.cursor = ""
        }
      })
    }, 4000)
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

  openlayersControllerIdentifier() {
    return "libs--map--openlayers--index"
  }

  openlayersController() {
    return this.application.getControllerForElementAndIdentifier(this.mapTarget, this.openlayersControllerIdentifier())
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
