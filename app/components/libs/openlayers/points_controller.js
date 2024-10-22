import OpenlayersController from "./openlayers_controller";

export default class PointsController extends OpenlayersController {
  static targets = ['map']
  static values = {
    points: { type: Array, default: [] }
  }

  initParams() {
    this.setParams({name: 'iconUrl', defaultValue: 'https://www.svgrepo.com/show/13654/placeholder.svg'})
  }

  init() {
    const osmLayer = new this.TiltLayer({
      source: new this.OSM()
    })
    this.pointsSource = new this.VectorSource({})
    this.pointsLayer = new this.VectorLayer({
      source: this.pointsSource,
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
    this.map.addLayer(this.pointsLayer)
    this.map.on('singleclick', (event) => {
      const newPoint = {
        id: this.newUUID(),
        coordinates: event.coordinate
      }
      this.points = this.pointsValue
      this.points.push(newPoint)
      this.pointsValue = this.points
    })
  }

  pointsValueChanged(value, previousValue) {
    if (!this.isInitializedValue) { return }
    this.pointsSource.addFeature(this.createFeature())
  }

  createFeature() {
    const newFeature = new this.Feature({
      geometry: new this.Point(this.lastPoint.coordinates),
    })
    newFeature.setId(this.lastPoint.id)
    newFeature.setStyle(this.pointStyle())
    return newFeature
  }

}
