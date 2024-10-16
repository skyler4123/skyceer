import { EstateHousesApi } from "../../../../javascript/controllers/api/estate/estate_houses_api";
import Libs_Map_Openlayers_IndexController from "../../../libs/map/openlayers/index_controller";

export default class Views_Estate_EstateHouses_IndexMapController extends Libs_Map_Openlayers_IndexController {
  // static values = {
  //   ...super.values,
  //   queryParams: Object
  // }

  initParams() {
    // this.setParams({name: 'variant', defaultValue: 'default'})
    this.setParams({name: 'iconUrl', defaultValue: 'https://www.svgrepo.com/show/533501/house-chimney-floor.svg'})
    this.setParams({name: 'viewCenter', defaultValue: [0, 0]})
    this.setParams({name: 'viewZoom', defaultValue: 4})
  }

  initComplete() {
    this.initHTML()
    super.initComplete()
    this.initBlindingFunctions()
    // this.initPointsValue()
    this.initPointerHoverOnFeature()
    this.initOpenUrlOnClickFeature({url: '/estate_houses/'})
  }

  initHTML() {
    if (!this.hasMapTarget) {
      this.element.innerHTML = `<div class="w-full" data-${this.identifier}-target="map"></div>`
    }
  }

  initBlindingFunctions() {
    super.initBlindingFunctions()
    this.pointStyleTextFunction = (point) => {
      let Fill = this.Fill
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
  }
  
  queryParamsValueChanged(value, previousValue) {
    EstateHousesApi.index({params: value}).then(response => {
      let points = response.data
      this.pointsValue = points
    }).catch(error => {
      console.log(error)
    })

  }

  receiveFromSearch(event) {
    this.queryParamsValue = event.detail.queryParams
  }
}
