import ApplicationController from "../javascript/controllers/application_controller";

export default class SelectController extends ApplicationController {
  static targets = ['defaultOption', 'option']
  static values = {
    ...super.values,
    select: { type: String }
  }

  init() {
    this.initTarget()
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
    this.addAction(this.element, `change->${this.identifier}#change`)
  }

  change() {
    this.selectValue = this.element.value
  }

}
