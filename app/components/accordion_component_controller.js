import ApplicationComponentController from './application_component_controller';

export default class AccordionComponentController extends ApplicationComponentController {
  static targets = ['content']
  static values = {
    ...super.values,
  }

  initialize() {
    super.initialize()
    this.initializeClass()
    this.initializeAction()
    this.initializeComplete()
  }

  initializeClass() {
    if (this.type) {
      Object.keys(this.typeClass[this.type]).forEach((target) => {
        this.mergeClass(target, this.typeClass[this.type][target])
      })
    }
    super.initializeClass()
  }

  get type() {
    return this.optionsValue.type || 'vertical'
  }
  get typeClass() {
    return {
      vertical: {
        element: 'grid grid-rows-[0fr] open:grid-rows-[1fr] transition-all duration-200 ease-out overflow-hidden',
        contentTarget: 'overflow-hidden'
      },
      horizontal: {
        element: 'whitespace-nowrap grid grid-cols-[0fr] open:grid-rows-[1fr] open:grid-cols-[1fr] transition-all duration-200 ease-out overflow-hidden',
        contentTarget: 'overflow-hidden',
      }
    }
  }


}
