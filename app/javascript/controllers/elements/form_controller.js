import ApplicationController from "../application_controller";

export default class FormController extends ApplicationController {
  static targets = [...super.targets, 'input', 'select']
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

    this.element.querySelectorAll('select[name]').forEach((target) => {
      if (target.type === "submit") { return }
      target.setAttribute(`data-${this.identifier}-target`, 'select')
    })
  }

  initAction() {
    this.element.dataset.action += ` submit->${this.identifier}#submit`
    this.inputTargets.forEach((target) => {
      target.dataset.action += ` input->${this.identifier}#input`
    })
    this.selectTargets.forEach((target) => {
      target.dataset.action += ` change->${this.identifier}#input`
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
    this.selectTargets.forEach((target) => {
      newInput[target.name] = target.value
    })
    this.formValue = newInput
    return newInput
  }

  formData() {
    return new FormData(this.element)
  }

  formValueChanged(value, previousValue) {
    this.inputTargets.forEach((target) => {
      target.value = this.formValue[target.name]
    })
    if (this.isDefined(this.formValueCallback)) { this.formValueCallback(value, previousValue) }
  }

  submit(event) {
    event.preventDefault()
    this.submitValue = this.input()
  }

  submitValueChanged(value, previousValue) {
    if (this.isDefined(this.submitValueCallback)) { this.submitValueCallback(value, previousValue) }
  }
}
