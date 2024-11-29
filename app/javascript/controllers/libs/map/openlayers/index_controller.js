import Libs_Map_Openlayers_OpenlayersController from "./openlayers_controller"

export default class Libs_Map_Openlayers_IndexController extends Libs_Map_Openlayers_OpenlayersController {
  static targets = ['map']
  static values = {
    points: { type: Array, default: [] }
  }

  initParams() {
    this.setParams({name: 'iconUrl', defaultValue: 'https://www.svgrepo.com/show/13654/placeholder.svg'})
    this.setParams({name: 'points', defaultValue: [{ longitude: 20, latitude: 10, id: 10, price: 999, name: 'Name Demo' }, { longitude: 10, latitude: 10, id: 10, price: 999, name: 'Name Demo' }]})
    this.setParams({name: 'viewCenter', defaultValue: [0, 0]})
    this.setParams({name: 'viewZoom', defaultValue: 4})
  }

  initComplete() {
    super.initComplete()
    this.initOpenlayersIndex()
    this.initPointsFeature()
  } // initComplete

  initOpenlayersIndex() {
    this.pointsSource = new this.VectorSource({})
    this.pointsLayer = new this.VectorLayer({
      source: this.pointsSource,
    })
    this.map.addLayer(this.pointsLayer)
  }

  initPointsFeature() {
    if (this.isEmpty(this.pointsValue)) {
      this.pointsValue = this.pointsParams
    }
    this.pointsSource.clear()
    this.pointsValue.forEach((point) => {
      this.pointsSource.addFeature(this.createPointFeature(point))
    })
  }
  
  pointsValueChanged() {
    if (!this.isInitializedValue || this.isUndefined(this.pointsSource)) { return }
    this.initPointsFeature()
  }
}
