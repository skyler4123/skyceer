import openlayers from "openlayers"
import colormap from 'colormap';
import ApplicationController from '../../javascript/controllers/application_controller';

const Map = openlayers.Map
const View = openlayers.View
const TiltLayer = openlayers.layer.Tile
const OSM = openlayers.source.OSM
const GeoJSON = openlayers.format.GeoJSON
const VectorLayer = openlayers.layer.Vector
const VectorSource = openlayers.source.Vector
const DragAndDrop = openlayers.interaction.DragAndDrop
const Modify = openlayers.interaction.Modify
const Draw = openlayers.interaction.Draw
const Snap = openlayers.interaction.Snap
const Style = openlayers.style.Style
const Stroke = openlayers.style.Stroke
const Fill = openlayers.style.Fill
const getArea = openlayers.Sphere.getArea
const Feature = openlayers.Feature
const Point = openlayers.geom.Point
const circular = openlayers.geom.Polygon.circular



export default class Openlayers extends ApplicationController {
  static targets = ['map', 'download', 'clear']

  get typeClass() {
    return {
      default: {
        element: 'w-full h-[500px]',
        mapTarget: 'w-full h-full',
        downloadTarget: 'text-red-500',
        clearTarget: ''
      }
    }
  }

  // init() {
  //   super.init()
  //   this.initComplete()
  // }

  initParams() {
    // super.initParams()
    this.setParams({name: 'type', defaultValue: 'default'})
  }

  initAction() {
    this.addAction(this.clearTarget, `click->${this.identifier}#clear`)
  }

  clear() {
    this.source.clear()
  }
  connect() {
    function clamp(value, low, high) {
      return Math.max(low, Math.min(value, high));
    }
    
    function getColor(feature) {
      const min = 1e8; // the smallest area
      const max = 2e13; // the biggest area
      const steps = 50;
      const ramp = colormap({
        colormap: 'blackbody',
        nshades: steps,
      });
      
      const area = getArea(feature.getGeometry());
      const f = Math.pow(clamp((area - min) / (max - min), 0, 1), 1 / 2);
      const index = Math.round(f * (steps - 1));
      return ramp[index];
    }
    
    this.source = new VectorSource()
    this.sourceOSM = new OSM()

    this.map = new Map({
      target: this.mapTarget,
      view: new View({
        center: [116.6888326e5, 10.7789988e5],
        zoom: 8,
      }),
      layers: [
        new TiltLayer({
          source: this.sourceOSM
        })
      ]
    })

    const layer = new VectorLayer({
      source: this.source,
      style: (feature) => {
        return new Style({
          fill: new Fill({
            color: getColor(feature)
          }),
          stroke: new Stroke({
            color: 'rgba(255,255,255,0.8)'
          })
        })
      }
      // style: new Style({
      //   fill: new Fill({color: 'red'}),
      //   stroke: new Stroke({color: 'white'})
      // })
    })

    this.map.addLayer(layer)
    this.map.addInteraction(
      new DragAndDrop({
        source: this.source,
        formatConstructors: [GeoJSON]
      })
    )

    this.map.addInteraction(
      new Modify({
        source: this.source,
      })
    );

    this.map.addInteraction(
      new Draw({
        type: 'Polygon',
        source: this.source,
      })
    );

    this.map.addInteraction(
      new Snap({
        source: this.source
      })
    )

    const format = new GeoJSON({featureProjection: 'EPSG:3857'})
    this.source.on('change', () => {
      const features = this.source.getFeatures()
      const json = format.writeFeatures(features)
      this.downloadTarget.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(json)
    })



    navigator.geolocation.watchPosition((pos) => {
      const coords = [pos.coords.longitude, pos.coords.latitude];
      // console.log(coords)
      // this.map.setView(new View({
      //   center: [pos.coords.longitude, pos.coords.latitude],
      //   zoom: 10
      // }))
      
      // const accuracy = circular(coords, pos.coords.accuracy);
      // this.sourceOSM.clear(true);
      // this.sourceOSM.addFeatures([
      //   new Feature(
      //     accuracy.transform('EPSG:4326', this.map.getView().getProjection())
      //   ),
      //   new Feature(new Point(fromLonLat(coords))),
      // ]);
    });


  } // connect


}



