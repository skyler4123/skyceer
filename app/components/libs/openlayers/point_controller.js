import OpenlayersController from "./openlayers_controller";

export default class PointController extends OpenlayersController {
  static targets = ['map']
  static values = {
    point: { type: Object, default: {} }
  }

  initParams() {
    this.setParams({name: 'iconUrl', defaultValue: 'https://www.svgrepo.com/show/13654/placeholder.svg'})
  }

  init() {
    const osmLayer = new this.TiltLayer({
      source: new this.OSM()
    })
    this.map = new this.Map({
      target: this.mapTarget,
      view: new this.View({
        center: [0, 0],
        zoom: 2,
      }),
      layers: [
        osmLayer
      ]
    })
    this.poinstSource = new this.VectorSource({})
    this.pointLayer = new this.VectorLayer({
      source: this.poinstSource,
    })
    this.map.addLayer(this.pointLayer)
    this.map.on('singleclick', (event) => {
      this.pointValue = {
        id: this.newUUID,
        coordinates: event.coordinate
      }
    })
  }

  pointValueChanged(value, previousValue) {
    if (!this.isInitializedValue) { return }
    this.poinstSource.clear()
    this.poinstSource.addFeature(this.createFeature())
  }

  createFeature() {
    const newFeature = new this.Feature({
      geometry: new this.Point(this.pointValue.coordinates),
    })
    newFeature.setId(this.pointValue.id)
    newFeature.setStyle(this.pointStyle())
    return newFeature
  }

}