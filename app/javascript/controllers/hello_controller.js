// import ApplicationController from './application_controller'
// export default class extends ApplicationController {
import openlayers from "openlayers"
import Components from "./components"
import { Controller } from "@hotwired/stimulus"

const Map = openlayers.Map
const View = openlayers.View
const TiltLayer = openlayers.layer.Tile
const OSM = openlayers.source.OSM
export default class extends Controller {
  initialize() {
    const map = new Map({
      target: "map",
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
      layers: [
        new TiltLayer({
          source: new OSM()
        })
      ]
    })
  }

















  // get initHTML() {
  //   return (
  //     Components('button', {label: 'Test Components', event: {id: '123', listener: 'click', action: 'toggle'}, variant: 'gradient_monochrome'}) +
  //     Components('button', {label: 'Test Components', event: {id: '123', listener: 'click', action: 'toggle'}, variant: 'gradient_monochrome'}) +
  //     Components('button', {label: 'Test Components', event: {id: '123', listener: 'click', action: 'toggle'}, variant: 'gradient_monochrome'}) +
  //     Components('button', {label: 'Test Components', event: {id: '123', listener: 'click', action: 'toggle'}, variant: 'gradient_monochrome'})
  //   )
  // }
}
