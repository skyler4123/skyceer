import ApplicationController from "../javascript/controllers/application_controller";

export default class HrController extends ApplicationController {
  static values = {
    ...super.values,
  }

  initParams() {
    this.setParams({name: 'type', defaultValue: 'default'})
  }
  
  get typeClass() {
    return {
      default: {
        element: 'w-full my-5',
      }
    }
  }

}
