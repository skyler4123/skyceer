import ApplicationComponentController from './application_component_controller';

export default class MapComponentController extends ApplicationComponentController {
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    
    this.initializeComplete()
  }
}
