import { RsCondosApi } from "../../../../javascript/controllers/api/rs/rs_condos_api";
import Libs_Map_Openlayers_IndexController from "../../../libs/map/openlayers/index_controller";

export default class Views_Rs_RsCondos_IndexMapController extends Libs_Map_Openlayers_IndexController {
  static values = {
    ...super.values,
    queryParams: Object
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
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
    this.initOpenUrlOnClickFeature()
  }

  initHTML() {
    if (!this.hasMapTarget) {
      this.element.insertAdjacentHTML('beforeend', `<div data-${this.identifier}-target="map"></div>`)
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
  
  async queryParamsValueChanged(value, previousValue) {
    const res = await RsCondosApi.index({params: value})
    let points = res.data
    this.pointsValue = points
  }

  receiveFromSearch(event) {
    this.queryParamsValue = event.detail.queryParams
  }
}
