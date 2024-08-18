import OpenlayersController from "../openlayers_controller";

export default class extends OpenlayersController {
  static targets = ['map']
  static values = {
    points: { type: Array, default: [] }
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
    this.setParams({name: 'iconUrl', defaultValue: 'https://www.svgrepo.com/show/13654/placeholder.svg'})
    this.setParams({name: 'points', defaultValue: [{ longitude: 20, latitude: 10, id: 10, price: 999, name: 'Name Demo' }, { longitude: 10, latitude: 10, id: 10, price: 999, name: 'Name Demo' }]})
    this.setParams({name: 'viewCenter', defaultValue: [0, 0]})
    this.setParams({name: 'viewZoom', defaultValue: 4})
  }

  initComplete() {
    super.initComplete()
    this.initOpenlayersIndex()
  } // initComplete

  initOpenlayersIndex() {
    this.pointsSource = new this.VectorSource({})
    this.pointsLayer = new this.VectorLayer({
      source: this.pointsSource,
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
    this.map.addLayer(this.pointsLayer)
    this.pointsValue = this.pointsParams
  }

  pointsValueChanged() {
    if (!this.isInitializedValue) { return }
    this.pointsSource.clear()
    this.createPointsFeature()
  }

  createPointsFeature() {
    this.pointsValue.forEach((point) => {
      this.pointsSource.addFeature(this.pointFeature(point))
    })
  }

  pointFeature(point) {
    let coordinates = this.fromLonLat([point.longitude, point.latitude])
    return new this.Feature({
      geometry: new this.Point(coordinates),
      ...point,
    })
  }
}
