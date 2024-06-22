import { VehicleCarsApi } from "../../../javascript/controllers/api/vehicle/vehicle_cars_api"
import { origin } from "../../../javascript/controllers/api/base_api"
import OpenlayersController from "../../libs/openlayers/openlayers_controller"

export default class MapCarIndexController extends OpenlayersController {
  static values = {
    ...super.values,
    points: { type: Array, default: [] },
    fetchParams: { type: Object, default: {} }
  }

  initComplete() {
    if (!this.isInitializedValue) { return }
    this.element.firstChild && this.element.removeChild(this.element.firstChild)
    const osmLayer = new this.TiltLayer({
      source: new this.OSM()
    })
    this.pointsSource = new this.VectorSource({})
    this.pointsLayer = new this.VectorLayer({
      source: this.pointsSource,
    })

    this.map = new this.Map({
      target: this.element,
      view: new this.View({
        center: [0, 0],
        zoom: 2,
      }),
      layers: [
        osmLayer
      ]
    })
    this.map.addLayer(this.pointsLayer)

    this.fetchPointFeature()
    this.addPointerMoveEvent()
    this.addSingleClickEvent()
  }

  fetchParamsValueChanged(value, previousValue) {
    if (!this.isInitializedValue) { return }
    this.fetchPointFeature({params: value})
  }

  fetchPointFeature({params} = {}) {
    this.pointsSource.clear()
    VehicleCarsApi.index({params: params}).then(response => {
      const carsData = response.data
      carsData.forEach(carData => {
        if (!this.isCoordinateValid(carData.coordinates)) { return }
        const newFeature =  new this.Feature({
          geometry: new this.Point(carData.coordinates),
          id: carData.id
        })
        newFeature.setStyle(this.pointStyle({ text: `$${Math.round(carData.price)}` }))
        this.pointsSource.addFeature(newFeature)
      })
    })
  }

  addPointerMoveEvent() {
    this.map.on("pointermove", (event) => {
      if (!this.isInitializedValue) { return }
      const feature = this.pointsSource.getClosestFeatureToCoordinate(event.coordinate)
      const isNear = this.isNearFromEventToPointFeature({event: event, feature: feature})
      if (isNear) {
        this.map.getViewport().style.cursor = "pointer"
      } else {
        this.map.getViewport().style.cursor = ""
      }
    })
  }

  addSingleClickEvent() {
    this.map.on("singleclick", (event) => {
      const feature = this.pointsSource.getClosestFeatureToCoordinate(event.coordinate)
      const isNear = this.isNearFromEventToPointFeature({event: event, feature: feature})
      if (isNear) {
        window.open(origin + "/vehicle_cars/" + feature.get('id'))
      }
    })
  }

  pointStyle({text}) {
    return new this.Style({
      image: new this.Icon({
        anchor: [0.5, 400],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'https://www.svgrepo.com/show/476540/car.svg',

        scale: 0.03
      }),
      text: new this.Text({
        font: '16px sans-serif',
        text: text,
        textAlign: 'center',
        offsetY: -25,
        fill: new this.Fill({
          color: [255, 255, 255, 1],
        }),
        backgroundFill: new this.Fill({
          color: [168, 50, 153, 0.6],
        }),
      }),
    })
  }

}
