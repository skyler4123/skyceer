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

export default class MarkerController extends ApplicationController {
  static targets = ['map', 'download', 'clear', 'input']

  initialize() {
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









    this.iconSource = new VectorSource({
      features: [
        new Feature({
          geometry: new Point(fromLonLat([10, 10])),
          labelPoint: 'Label Demo',
          name: "demo name",
          id: 1,
          price: 100
        }),
        new Feature({
          geometry: new Point(fromLonLat([0, 0])),
          labelPoint: 'Label Demo',
          name: "demo name",
          id: 2,
          price: 223
        }),
        new Feature({
          geometry: new Point(fromLonLat([50, 0])),
          labelPoint: 'Label Demo',
          name: "demo name",
          id: 3,
          price: 332
        }),
        new Feature({
          geometry: new Point([10000000, -1000000]),
          labelPoint: 'Label Demo',
          name: "demo name",
          id: 4,
          price: 423
        }),
      ]
    })
    this.iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 850],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        // src: 'https://openlayers.org/en/latest/examples/data/icon.png',
        src: 'https://www.svgrepo.com/show/13654/placeholder.svg',
        scale: 0.03

      }),
    })

    this.iconLayer = new VectorLayer({
      source: this.iconSource,
      style: this.iconStyle
    })

    this.map.addLayer(this.iconLayer)

    this.map.on('singleclick', (event) => {
      const newIcon = new Feature({
        geometry: new Point(event.coordinate),
        labelPoint: 'Label Demo',
        name: "demo name",
        id: 3,
        price: 332
      })
      this.iconSource.addFeature(newIcon)
    })
  }
}