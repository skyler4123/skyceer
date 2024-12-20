import ApplicationController from "../application_controller";

export default class FormController extends ApplicationController {
  static targets = [...super.targets, 'input']
  static values = {
    form: { type: Object, default: {} },
    submit: { type: Object, default: {} },
  }

  init() {
    this.initTarget()
  }

  initTarget() {
    this.element.querySelectorAll('input[name]').forEach((target) => {
      if (target.type === "submit") { return }
      target.setAttribute(`data-${this.identifier}-target`, 'input')
    })
  }

  initAction() {
    this.element.dataset.action += ` submit->${this.identifier}#submit`
    this.inputTargets.forEach((target) => {
      target.dataset.action += ` input->${this.identifier}#input`
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
    this.formValue = newInput
  }

  formData() {
    return new FormData(this.element)
  }

  formValueChanged(value, previousValue) {
    this.inputTargets.forEach((target) => {
      target.value = this.formValue[target.name]
    })
    if (this.isDefined(this.formValueCallback)) { this.formValueCallback() }
  }

  submit(event) {
    event.preventDefault()
    this.submitValue = this.formValue
  }

  submitValueChanged(value, previousValue) {
    if (this.isDefined(this.submitValueCallback)) { this.submitValueCallback(value, previousValue) }
  }
}
