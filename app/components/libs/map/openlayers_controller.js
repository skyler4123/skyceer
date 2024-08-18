import openlayers from "openlayers"
import colormap from 'colormap';
import ApplicationController from "../../../javascript/controllers/application_controller";

export default class OpenlayersController extends ApplicationController {
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
    this.initOpenlayers()
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
      ...this.pointValue,
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

  pointStyleImageFunction(point) {
    return {
      anchor: [0.5, 850],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: this.iconUrlParams,
      scale: 0.03
    }
  }

  pointStyleTextFunction(point) {
    return {
      // font: '16px sans-serif',
      // text: point.name,
      // textAlign: 'center',
      // offsetY: -25,
      // fill: new this.Fill({
      //   color: [255, 255, 255, 1],
      // }),
      // backgroundFill: new this.Fill({
      //   color: [168, 50, 153, 0.6],
      // }),
      // padding: [2,2,2,2]
    }
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
