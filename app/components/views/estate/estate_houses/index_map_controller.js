import { EstateHousesApi } from "../../../../javascript/controllers/api/estate/estate_houses_api";
import { COUNTRY } from "../../../../javascript/controllers/constants/country";
import Libs_Map_Openlayers_IndexController from "../../../libs/map/openlayers/index_controller";

export default class Views_Estate_EstateHouses_IndexMapController extends Libs_Map_Openlayers_IndexController {

  initParams() {
    this.setParams({name: 'iconUrl', defaultValue: 'https://www.svgrepo.com/show/533501/house-chimney-floor.svg'})
    this.setParams({name: 'viewCenter', defaultValue: [0, 0]})
    this.setParams({name: 'viewZoom', defaultValue: 4})
  }

  initComplete() {
    console.log(COUNTRY)
    super.initComplete()
    this.initBlindingFunctions()
    this.initPointerHoverOnFeature()
    this.initOpenUrlOnClickFeature({url: '/estate_houses/'})
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

  receiveFromSearch(event) {
    this.queryParamsValue = event.detail.queryParams
  }
}
