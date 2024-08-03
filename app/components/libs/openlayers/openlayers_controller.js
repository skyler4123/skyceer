import openlayers from "openlayers"
import ApplicationController from "../../../javascript/controllers/application_controller";

export default class OpenlayersController extends ApplicationController {
  static targets = ['map']

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

  variantClass() {
    return {
      default: {
        element: "w-full h-[500px]"
      }
    }
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
    this.setParams({name: 'iconUrl', defaultValue: 'https://www.svgrepo.com/show/13654/placeholder.svg'})
  }

  thresholdHover({zoomLevel = 2, factor = 2}) {
    const basicZoomLevelWithThreshold = {
      '1': 201988,
      '2': 142574,
      '3': 214104,
      '4': 106014,
      '5': 28809,
      '6': 20110,
      '7': 16654,
      '8': 6762,
      '9': 5572,
      '10': 3216,
      '11': 429,
      '12': 403,
      '13': 300,
      '14': 150,
      '15': 130,
      '16': 110,
      '17': 90,
      '18': 70,
    }
    const roundZoomLevel = Math.round(zoomLevel)
    return basicZoomLevelWithThreshold[`${roundZoomLevel}`] * factor
  }

  initHover({source}) {
    this.map.on("pointermove", (event) => {
      const feature = source.getClosestFeatureToCoordinate(event.coordinate)
      const isNear = this.isNearFromEventToPointFeature({event: event, feature: feature})
      if (isNear) {
        this.map.getViewport().style.cursor = "pointer"
      } else {
        this.map.getViewport().style.cursor = ""
      }
    })
  }

  pointStyle() {
    return new this.Style({
      image: new this.Icon({
        anchor: [0.5, 850],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: this.iconUrlParams,
        scale: 0.03

      }),
    })
  }

  get lastPoint() {
    return this.pointsValue[this.pointsValue.length - 1]
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

  isCoordinateValid(coordinate) {
    if (this.isArray(coordinate) && coordinate.length === 2) { return true }
    return false
  }
}