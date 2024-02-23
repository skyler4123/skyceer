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
    this.initializeAction()
    this.initializeClass()

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
    this.addAction(this.element, `change->${this.identifier}#change`)
  }

  initializeClass() {
    this.element.className = this.twMerge(this.element.className , this.klass)
    this.defaultOptionTarget.className = this.twMerge(this.defaultOptionTarget.className , this.defaultOptionClass)
    this.optionTargets.forEach((target) => {
      target.className = this.twMerge(target.className , this.optionClass)
    })
  }

  change() {
    this.selectValue = this.value
  }

  get optionClass() {
    return this.optionsValue.optionClass || ''
  }
  get defaultOptionClass() {
    return this.optionsValue.defaultOptionClass || this.optionClass
  }
  get value() {
    return this.element.value
  }
}
