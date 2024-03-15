import ApplicationController from '../../javascript/controllers/application_controller';

export default class extends ApplicationController {
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    
    this.initializeComplete()
  }
}
