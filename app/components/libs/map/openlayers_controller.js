import openlayers from "openlayers"
import colormap from 'colormap';
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

export default class OpenlayersController extends ApplicationController {
  static targets = ['map']

  initComplete() {
    this.setParams({name: 'viewCenter', defaultValue: [0, 0]})
    this.setParams({name: 'viewZoom', defaultValue: 2})
    this.initOpenlayers()
  }

  initOpenlayers() {
    const osmLayer = new TiltLayer({
      source: new OSM()
    })
    this.map = new Map({
      target: this.mapTarget,
      view: new View({
        center: this.viewCenterParams,
        zoom: this.viewZoomParams,
      }),
      layers: [
        osmLayer
      ]
    })
  } // initComplete

  variantClass() {
    return {
      default: {
        element: 'relative w-full h-[500px]',
        mapTarget: 'w-full h-full',
      }
    }
  }

}
