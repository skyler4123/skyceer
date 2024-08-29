import Libs_Map_OpenlayersController from "../openlayers_controller";

export default class extends Libs_Map_OpenlayersController {
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
    })
    this.map.addLayer(this.pointLayer)
    this.pointValue = this.pointParams
  }

  pointValueChanged() {
    if (!this.isInitializedValue) { return }
    this.pointSource.clear()
    this.pointSource.addFeature(this.createPointFeature(this.pointValue))
  }
}
