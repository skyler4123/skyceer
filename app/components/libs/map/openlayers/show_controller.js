import OpenlayersController from "../openlayers_controller";

export default class extends OpenlayersController {
  static targets = ['map']
  static values = {
    point: { type: Object, default: {} }
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
    this.setParams({name: 'iconUrl', defaultValue: 'https://www.svgrepo.com/show/13654/placeholder.svg'})
    this.setParams({name: 'point', defaultValue: { longitude: -2.7, latitude: 4.9, id: 10, price: 999, name: 'Name Demo' }})
    this.setParams({name: 'viewCenter', defaultValue: [0, 0]})
    this.setParams({name: 'viewZoom', defaultValue: 4})
  }

  initComplete() {
    super.initComplete()
    this.initOpenlayersShow()
  } // initComplete

  initOpenlayersShow() {
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
    this.pointValue = this.pointParams
  }

  pointValueChanged() {
    if (!this.isInitializedValue) { return }
    this.pointSource.clear()
    this.pointSource.addFeature(this.pointFeature())
  }

  pointFeature() {
    let coordinates = this.fromLonLat([this.pointValue.longitude, this.pointValue.latitude])
    return new this.Feature({
      geometry: new this.Point(coordinates),
      ...this.pointValue,
    })
  }
}
