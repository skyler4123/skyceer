import openlayers from "openlayers"
import ApplicationController from "../../../javascript/controllers/application_controller";

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

export default class PointController extends ApplicationController {
  static targets = ['map']
  static values = {
    point: { type: Object, default: {} }
  }

  initParams() {
    this.setParams({name: 'iconUrl', defaultValue: 'https://www.svgrepo.com/show/13654/placeholder.svg'})
  }

  initComplete() {
    const osmLayer = new TiltLayer({
      source: new OSM()
    })
    this.map = new Map({
      target: this.mapTarget,
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
      layers: [
        osmLayer
      ]
    })

    this.poinstSource = new VectorSource({})

    this.pointLayer = new VectorLayer({
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
    const newFeature = new Feature({
      geometry: new Point(this.pointValue.coordinates),
    })
    newFeature.setId(this.pointValue.id)
    newFeature.setStyle(this.pointStyle())
    return newFeature
  }

  pointStyle() {
    return new Style({
      image: new Icon({
        anchor: [0.5, 850],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: this.iconUrlParams,
        scale: 0.03

      }),
    })
  }
}