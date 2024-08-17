import openlayers from "openlayers"
import OpenlayersController from "../openlayers_controller";

export default class extends OpenlayersController {
  static targets = ['map']
  static values = {
    pointCoordinates: { type: Object, default: {} }
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
    this.setParams({name: 'iconUrl', defaultValue: 'https://www.svgrepo.com/show/13654/placeholder.svg'})
    this.setParams({name: 'pointCoordinates', defaultValue: { longitude: 20, latitude: 10, id: 10, price: 999, name: 'Name Demo' }})
    this.setParams({name: 'viewCenter', defaultValue: [0, 0]})
    this.setParams({name: 'viewZoom', defaultValue: 4})
  }

  initComplete() {
    super.initComplete()
    this.initOpenlayersNew()
    this.initOpenlayersEvent()
  } // initComplete

  initOpenlayersNew() {
    this.pointSource = new this.VectorSource({})
    this.pointLayer = new this.VectorLayer({
      source: this.pointSource,
      style: new this.Style({
        image: new this.Icon({
          anchor: [0.5, 850],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: this.iconUrlParams,
          scale: 0.03
        }),
      })
    })
    this.map.addLayer(this.pointLayer)
    this.pointCoordinatesValue = this.pointCoordinatesParams
  }

  initOpenlayersEvent() {
    this.map.on('singleclick', (event) => {
      let newPointCoordinatesLonLat = toLonLat(event.coordinate)
      let newPointCoordinates = {longitude: newPointCoordinatesLonLat[0], latitude: newPointCoordinatesLonLat[1]}
      this.pointCoordinatesValue = { ...this.pointCoordinatesValue, ...newPointCoordinates }
    })
  }
  
  pointCoordinatesValueChanged() {
    if (!this.isInitializedValue) { return }
    this.pointSource.clear()
    this.pointSource.addFeature(this.pointFeature())
  }

  pointFeature() {
    let coordinates = this.fromLonLat([this.pointCoordinatesValue.longitude, this.pointCoordinatesValue.latitude])
    return new this.Feature({
      geometry: new this.Point(coordinates),
      ...this.pointCoordinatesValue,
    })
  }
}
