import openlayers from "openlayers"
import OpenlayersController from "../openlayers_controller";


const Map = openlayers.Map
const View = openlayers.View
const Feature = openlayers.Feature
const Overlay = openlayers.Overlay

const TiltLayer = openlayers.layer.Tile
const VectorLayer = openlayers.layer.Vector

const OSM = openlayers.source.OSM
const VectorSource = openlayers.source.Vector
const Stamen = openlayers.source.Stamen
const XYZ = openlayers.source.XYZ

const GeoJSON = openlayers.format.GeoJSON
const KML = openlayers.format.KML

const DragAndDrop = openlayers.interaction.DragAndDrop
const Modify = openlayers.interaction.Modify
const Draw = openlayers.interaction.Draw
const Snap = openlayers.interaction.Snap
const Select = openlayers.interaction.Select

const Style = openlayers.style.Style
const Stroke = openlayers.style.Stroke
const Fill = openlayers.style.Fill
const Text = openlayers.style.Text
const CircleStyle = openlayers.style.Circle
const Icon = openlayers.style.Icon

const getArea = openlayers.Sphere.getArea

const fromExtent = openlayers.geom.Polygon.fromExtent
const Point = openlayers.geom.Point
const MultiPoint = openlayers.geom.MultiPoint
const circular = openlayers.geom.Polygon.circular

const VectorContext = openlayers.render.VectorContext

const toLonLat = openlayers.proj.toLonLat
const fromLonLat = openlayers.proj.fromLonLat

const toStringHDMS = openlayers.coordinate.toStringHDMS

const click = openlayers.events.condition.click
const pointerMove = openlayers.events.condition.pointerMove

export default class extends OpenlayersController {
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
    this.pointsSource = new VectorSource({})
    this.pointsLayer = new VectorLayer({
      source: this.pointsSource,
      style: new Style({
        image: new Icon({
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
    let coordinates = fromLonLat([point.longitude, point.latitude])
    return new Feature({
      geometry: new Point(coordinates),
      ...point,
    })
  }
}
