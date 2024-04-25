import ApplicationController from "../javascript/controllers/application_controller";

export default class ToastController extends ApplicationController {
  static values = {
    ...super.values,
  }

  initParams() {
    this.setParams({name: 'type', defaultValue: 'default'})
    this.setParams({name: 'position', defaultValue: 'left'})
  }

  get typeClass() {
    return {
      default: {
        element: 'w-1/3 h-5/6 bg-gray-200 rounded-lg text-black shadow-lg shadow-gray-500/50'
      }
    }
  }

  get positionClass() {
    return {
      'left': {
        element: 'fixed top-1/2 -left-1/2 z-20 -translate-x-full -translate-y-1/2 duration-200 ease-out open:translate-x-0 open:left-2 p-4'
      },
      'right': {
        element: 'fixed top-1/2 -right-1/2 z-20 translate-x-full -translate-y-1/2 duration-200 ease-out open:translate-x-0 open:right-2 p-4'
      },
      'top': {
        element: 'fixed -top-1/2 right-1/2 z-20 -translate-x-1/2 -translate-y-full duration-200 ease-out open:translate-y-0 open:top-2 p-4'
      },
      'bottom': {
        element: 'fixed -bottom-1/2 right-1/2 z-20 -translate-x-1/2 translate-y-full duration-200 ease-out open:translate-y-0 open:bottom-2 p-4'
      },
    }
  }


}