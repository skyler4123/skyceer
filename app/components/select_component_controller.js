import ApplicationComponentController from './application_component_controller';

export default class SelectComponentController extends ApplicationComponentController {
  static targets = ['defaultOption', 'option']
  static values = {
    ...super.values,
    select: { type: String }
  }

  initialize() {
    super.initialize()
    this.initializeTarget()
    this.initializeComplete()
  }

  initializeTarget() {
    this.element.querySelectorAll('option').forEach((target) => {
      if (target.hasAttribute('value')) {
        target.setAttribute(`data-${this.identifier}-target`, 'option')
      } else {
        target.setAttribute(`data-${this.identifier}-target`, 'defaultOption')
        target.setAttribute('value', 'default')
      }
    })
  }

  initializeAction() {
    super.initializeAction()
    this.addAction(this.element, `change->${this.identifier}#change`)
  }

  change() {
    this.selectValue = this.element.value
  }

  get optionClass() {
    return this.optionsValue.optionClass || ''
  }
  get defaultOptionClass() {
    return this.optionsValue.defaultOptionClass || this.optionClass
  }
}
