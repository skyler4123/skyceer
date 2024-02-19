import { Loader } from "@googlemaps/js-api-loader"
import ApplicationComponentController from './application_component_controller';

export default class MapComponentController extends ApplicationComponentController {
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    this.initializeMap()

    this.initializeComplete()
  }

  initializeMap() {
    const loader = new Loader({
      apiKey: "YOUR_API_KEY",
      version: "weekly",
      ...additionalOptions,
    });
    
    loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps");
    
      map = new Map(this.element, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
    
  }
}
