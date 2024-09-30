import ApplicationController from "../javascript/controllers/application_controller";

export default class FormController extends ApplicationController {
  static targets = [...super.targets, 'input']
  static values = {
    ...super.values,
    submit: { type: Object, default: {} }
  }

  init() {
    this.initTarget()
  }

  initTarget() {
    this.element.querySelectorAll('input[name]').forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, 'input')
    })
  }

  initAction() {
    this.inputTargets.forEach((target) => {
      this.addAction(target, `input->${this.identifier}#input`)
    })
  }

  initComplete() {
    // To init value with previous data
    this.input()
  }

  input(event = null) {
    let newInput = {}
    this.inputTargets.forEach((target) => {
      newInput[target.name] = target.value
    })
    this.submitValue = newInput
  }
}
