import ApplicationComponentController from './application_component_controller';

export default class HrComponentController extends ApplicationComponentController {
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    this.initializeComplete()
  }

  get type() {
    return this.optionsValue.type || 'default'
  }
  get typeClass() {
    return {
      default: {
        element: 'w-full my-5',
      }
    }
  }

}
