import openlayers from "openlayers"
import OpenlayersController from "../openlayers_controller";

export default class extends OpenlayersController {
  get Map() { return openlayers.Map }
  get View() { return openlayers.View }
  get Feature() { return openlayers.Feature }
  get Overlay() { return openlayers.Overlay }
  get TiltLayer() { return openlayers.layer.Tile }
  get VectorLayer() { return openlayers.layer.Vector }
  get OSM() { return openlayers.source.OSM }
  get VectorSource() { return openlayers.source.Vector }
  get Stamen() { return openlayers.source.Stamen }
  get XYZ() { return openlayers.source.XYZ }
  get GeoJSON() { return openlayers.format.GeoJSON }
  get KML() { return openlayers.format.KML }
  get DragAndDrop() { return openlayers.interaction.DragAndDrop }
  get Modify() { return openlayers.interaction.Modify }
  get Draw() { return openlayers.interaction.Draw }
  get Snap() { return openlayers.interaction.Snap }
  get Select() { return openlayers.interaction.Select }
  get Style() { return openlayers.style.Style }
  get Stroke() { return openlayers.style.Stroke }
  get Fill() { return openlayers.style.Fill }
  get Text() { return openlayers.style.Text }
  get CircleStyle() { return openlayers.style.Circle }
  get Icon() { return openlayers.style.Icon }
  get getArea() { return openlayers.Sphere.getArea }
  get fromExtent() { return openlayers.geom.Polygon.fromExtent }
  get Point() { return openlayers.geom.Point }
  get MultiPoint() { return openlayers.geom.MultiPoint }
  get circular() { return openlayers.geom.Polygon.circular }
  get VectorContext() { return openlayers.render.VectorContext }
  get toLonLat() { return openlayers.proj.toLonLat }
  get fromLonLat() { return openlayers.proj.fromLonLat }
  get toStringHDMS() { return openlayers.coordinate.toStringHDMS }
  get click() { return openlayers.events.condition.click }
  get pointerMove() { return openlayers.events.condition.pointerMove }

  static targets = ['map']
  static values = {
    pointsCoordinates: { type: Array, default: [] }
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
    this.setParams({name: 'iconUrl', defaultValue: 'https://www.svgrepo.com/show/13654/placeholder.svg'})
    this.setParams({name: 'pointsCoordinates', defaultValue: [{ longitude: 20, latitude: 10, id: 10, price: 999, name: 'Name Demo' }, { longitude: 10, latitude: 10, id: 10, price: 999, name: 'Name Demo' }]})
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
    this.pointsCoordinatesValue = this.pointsCoordinatesParams
  }

  pointsCoordinatesValueChanged() {
    if (!this.isInitializedValue) { return }
    this.pointsSource.clear()
    this.createPointsFeature()
  }

  createPointsFeature() {
    this.pointsCoordinatesValue.forEach((point) => {
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
