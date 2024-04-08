import ApplicationController from "../javascript/controllers/application_controller";

export default class HrController extends ApplicationController {
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    this.initializeComplete()
  }

  initializeParams() {
    super.initializeParams()
    this.setParams({name: 'type', defaultValue: 'default'})
  }
  
  // get type() {
  //   return this.paramsValue.type || 'default'
  // }
  get typeClass() {
    return {
      default: {
        element: 'w-full my-5',
      }
    }
  }

}
