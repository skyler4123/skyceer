import ApplicationController from "../javascript/controllers/application_controller";

export default class SelectController extends ApplicationController {
  static targets = ['defaultOption', 'option']
  static values = {
    ...super.values,
    select: { type: String }
  }

  init() {
    // super.init()
    this.initTarget()
    // this.initComplete()
  }

  initTarget() {
    this.element.querySelectorAll('option').forEach((target) => {
      if (target.hasAttribute('value')) {
        target.setAttribute(`data-${this.identifier}-target`, 'option')
      } else {
        target.setAttribute(`data-${this.identifier}-target`, 'defaultOption')
        target.setAttribute('value', 'default')
      }
    })
  }

  initAction() {
    // super.initAction()
    this.addAction(this.element, `change->${this.identifier}#change`)
  }

  change() {
    this.selectValue = this.element.value
  }

  // get optionClass() {
  //   return this.paramsValue.optionClass || ''
  // }
  // get defaultOptionClass() {
  //   return this.paramsValue.defaultOptionClass || this.optionClass
  // }
}
