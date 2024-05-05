import openlayers from "openlayers"
import ApplicationController from "../../../javascript/controllers/application_controller"
import { CarCarsApi } from "../../../javascript/controllers/api/car/car_cars_api"
import { origin } from "../../../javascript/controllers/api"

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

export default class CreateMapController extends ApplicationController {
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







    this.iconSource = new VectorSource()


    // this.iconSource = new VectorSource({
    //   features: [
    //     new Feature({
    //       geometry: new Point(fromLonLat([10, 10])),
    //       labelPoint: 'Label Demo',
    //       name: "demo name",
    //       id: 1,
    //       price: 100
    //     }),
    //     new Feature({
    //       geometry: new Point(fromLonLat([0, 0])),
    //       labelPoint: 'Label Demo',
    //       name: "demo name",
    //       id: 2,
    //       price: 223
    //     }),
    //     new Feature({
    //       geometry: new Point(fromLonLat([50, 0])),
    //       labelPoint: 'Label Demo',
    //       name: "demo name",
    //       id: 3,
    //       price: 332
    //     }),
    //     new Feature({
    //       geometry: new Point([10000000, -1000000]),
    //       labelPoint: 'Label Demo',
    //       name: "demo name",
    //       id: 4,
    //       price: 423
    //     }),
    //   ]
    // })

    this.iconLayer = new VectorLayer({
      source: this.iconSource,
    })

    this.map.addLayer(this.iconLayer)

    CarCarsApi.index().then(response => {
      const carsData = response.data
      carsData.forEach(carData => {
        const newFeature =  new Feature({
          geometry: new Point(carData.coordinates),
          id: carData.id
        })
        newFeature.setStyle(this.iconStyle({ text: `$${Math.round(carData.price)}` }))
        this.iconSource.addFeature(newFeature)
      })
    })

    // this.map.on('singleclick', async (event) => {
      // try {
      //   const response = await CarCarsApi.create({params: {coordinates: event.coordinate}})
      //   const coordinates = response.data.coordinates
      //   const newIcon = new Feature({
      //     geometry: new Point(coordinates),
      //     labelPoint: 'Label Demo',
      //     name: "demo name",
      //     id: 3,
      //     price: 332
      //   })
      //   this.iconSource.addFeature(newIcon)

      // } catch(error) {
      //   console.log(error)
      // }
    // })


    this.map.on("pointermove", (event) => {
      const feature = this.iconSource.getClosestFeatureToCoordinate(event.coordinate)
      const isNear = this.isNearFromEventToPointFeature({event: event, feature: feature})
      if (isNear) {
        this.map.getViewport().style.cursor = "pointer"
      } else {
        this.map.getViewport().style.cursor = ""
      }
    })

    this.map.on("singleclick", (event) => {
      const feature = this.iconSource.getClosestFeatureToCoordinate(event.coordinate)
      const isNear = this.isNearFromEventToPointFeature({event: event, feature: feature})
      if (isNear) {
        location.href = origin + "/car_cars/" + feature.get('id')
      }
    })


  }

  distanceBetween(coordinateA, coordinateB) {
    const xDelta = Math.abs(coordinateA[0] - coordinateB[0])
    const yDelta = Math.abs(coordinateA[1] - coordinateB[1])
    const distance = Math.sqrt(Math.abs(Math.pow(xDelta, 2) - Math.pow(yDelta, 2)))
    return distance
  }

  isNearFromEventToPointFeature({event, feature, threshold = 100000} = {}) {
    const eventCoordinates = event.coordinate
    const featureCoordinates = feature.getGeometry().getCoordinates()
    const distance = this.distanceBetween(eventCoordinates, featureCoordinates)
    return(distance < threshold)
  }



  iconStyle({text}) {
    return new Style({
      image: new Icon({
        anchor: [0.5, 850],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        // src: 'https://openlayers.org/en/latest/examples/data/icon.png',
        src: 'https://www.svgrepo.com/show/13654/placeholder.svg',
        scale: 0.03
      }),
      text: new Text({
        font: '16px sans-serif',
        text: text,
        textAlign: 'center',
        offsetY: -38,
        fill: new Fill({
          color: [255, 255, 255, 1],
        }),
        backgroundFill: new Fill({
          color: [168, 50, 153, 0.6],
        }),
        // padding: [2,2,2,2]
      }),
    })
  } 
}