import ApplicationController from "../javascript/controllers/application_controller";

export default class HrController extends ApplicationController {
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    this.initializeComplete()
  }

  get type() {
    return this.paramsValue.type || 'default'
  }
  get typeClass() {
    return {
      default: {
        element: 'w-full my-5',
      }
    }
  }

}
