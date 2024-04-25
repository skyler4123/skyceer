import ApplicationController from "../javascript/controllers/application_controller";

export default class AccordionController extends ApplicationController {
  static targets = ['overflow']
  static values = {
    ...super.values,
  }

  initParams() {
    this.setParams({name: 'type', defaultValue: 'vertical'})
  }

  get typeClass() {
    return {
      vertical: {
        element: 'grid grid-rows-[0fr] open:grid-rows-[1fr] transition-all duration-200 ease-out overflow-hidden',
        overflowTarget: 'overflow-hidden'
      },
      horizontal: {
        element: 'whitespace-nowrap grid grid-cols-[0fr] open:grid-rows-[1fr] open:grid-cols-[1fr] transition-all duration-200 ease-out overflow-hidden',
        overflowTarget: 'overflow-hidden',
      },
      horizontalOverlay: {
        element: 'absolute top-0 left-0 w-full h-full whitespace-nowrap grid grid-cols-[0fr] open:grid-rows-[1fr] open:grid-cols-[1fr] transition-all duration-300 ease-in-out overflow-hidden',
        overflowTarget: 'overflow-hidden',
      },
    }
  }


}
