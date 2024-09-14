import ApplicationController from "../javascript/controllers/application_controller";

export default class TextController extends ApplicationController {
  static values = {
    ...super.values,
    label: { type: String },
  }
  static outlets = ['cookie']

  init() {
    this.initValue()
  }

  initValue() {
    this.labelValue = this.labelParams || this.element.innerText
  }

  labelValueChanged(value, previousValue) {
    this.element.innerHTML = value
  }

  copyText() {
    window.navigator.clipboard.writeText(this.labelValue)
  }

  increase(event) {
    this.labelValue = Number(this.labelValue) + (Number(event.payload.value) || 1)
  }

  decrease(event) {
    this.labelValue = Number(this.labelValue) - (Number(event.payload.value) || 1)
  }

}


