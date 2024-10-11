import openlayers from "openlayers"
import colormap from 'colormap';
import ApplicationController from "../../../javascript/controllers/application_controller";

export default class Libs_Map_OpenlayersController extends ApplicationController {
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

  initComplete() {
    this.setParams({name: 'viewCenter', defaultValue: [0, 0]})
    this.setParams({name: 'viewZoom', defaultValue: 2})
    this.initBlindingFunctions()
    this.initOpenlayers()
  }

  initBlindingFunctions() {
    if (this.isUndefined(this.pointStyleImageFunction)) {
      this.pointStyleImageFunction = (point) => {
        return {
          anchor: [0.5, 850],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: this.iconUrlParams,
          scale: 0.03
        }
      }
    }
    if (this.isUndefined(this.pointStyleTextFunction)) {
      this.pointStyleTextFunction = (point) => {
        return {}
      }
    }
  }

  initOpenlayers() {
    const osmLayer = new this.TiltLayer({
      source: new this.OSM()
    })
    this.map = new this.Map({
      target: this.mapTarget,
      view: new this.View({
        center: this.viewCenterParams,
        zoom: this.viewZoomParams,
      }),
      layers: [
        osmLayer
      ]
    })
  } // initComplete

  createPointFeature(point) {
    let coordinates = this.fromLonLat([Number(point.longitude), Number(point.latitude)])
    let newPointFeature = new this.Feature({
      geometry: new this.Point(coordinates),
      ...point,
    })
    newPointFeature.setStyle(this.pointStyle(point))
    return newPointFeature
  }

  pointStyle(point) {
    return new this.Style({
      image: new this.Icon(this.pointStyleImageFunction(point)),
      text: new this.Text(this.pointStyleTextFunction(point)),
    })
  }

  thresholdHover({zoomLevel = 2}) {
    const basicZoomLevelWithThreshold = {
      '1': 1000000,
      '2': 400000,
      '3': 200000,
      '4': 100000,
      '5': 50000,
      '6': 25000,
      '7': 16000,
      '8': 8000,
      '9': 4000,
      '10': 3000,
      '11': 2000,
      '12': 1000,
      '13': 500,
      '14': 250,
      '15': 125,
      '16': 100,
      '17': 90,
      '18': 70,
    }
    const roundZoomLevel = Math.round(zoomLevel)
    return basicZoomLevelWithThreshold[`${roundZoomLevel}`]
  }

  distanceBetween(coordinateA, coordinateB) {
    const xDelta = Math.abs(coordinateA[0] - coordinateB[0])
    const yDelta = Math.abs(coordinateA[1] - coordinateB[1])
    const distance = Math.sqrt(Math.abs(Math.pow(xDelta, 2) - Math.pow(yDelta, 2)))
    return distance
  }

  isNearFromEventToPointFeature({event, feature} = {}) {
    if (!event || !feature ) { return false }
    let isNear = false
    const eventCoordinates = event.coordinate
    const featureCoordinates = feature.getGeometry().getCoordinates()
    const distance = this.distanceBetween(eventCoordinates, featureCoordinates)
    const zoomLevel = this.map.getView().getZoom()
    isNear = distance < this.thresholdHover({zoomLevel: zoomLevel})
    return isNear
  }
  
  initPointerHoverOnFeature() {
    this.map.on("pointermove", (event) => {
      const feature = this.pointsSource.getClosestFeatureToCoordinate(event.coordinate)
      const isNear = this.isNearFromEventToPointFeature({event: event, feature: feature})
      if (isNear) {
        this.map.getViewport().style.cursor = "pointer"
      } else {
        this.map.getViewport().style.cursor = ""
      }
    })
  }

  initOpenUrlOnClickFeature({url, featureGet = "id"}) {
    this.map.on("singleclick", (event) => {
      const feature = this.pointsSource.getClosestFeatureToCoordinate(event.coordinate)
      const isNear = this.isNearFromEventToPointFeature({event: event, feature: feature})
      if (isNear) {
        window.open(origin + url + feature.get(featureGet))
      }
    })
  }

  variantClass() {
    return {
      default: {
        element: 'relative w-full h-[500px]',
        mapTarget: 'w-full h-full',
      }
    }
  }

}
