import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["checkbox"]
  static values = {
    fields: Array, default: [],
    rememberable: Boolean, default: false
  }
  connect() {
    console.log("Hello, Stimulus!", this.fieldsValue);
  }
  initialize() {
    this.element.querySelector('input').setAttribute('data-input--remember-me-component-target', 'checkbox')
    this.checkboxTarget.setAttribute('data-action', 'change->input--remember-me-component#toggleRemember')
  }
  formElement() {
    return this.element.closest('form')
  }
  inputElements() {
    const inputs = this.formElement().querySelectorAll('input');
    return [...inputs].filter((input) => {
      return this.fieldsValue.includes(input.name)
    })
  }
  remmemberMeData() {
    var remmemberMeData = {}
    this.fieldsValue.forEach((field) => {
      remmemberMeData = {...remmemberMeData, [field]: this.inputElements().find(input => input.name === field).value}
    })
    return remmemberMeData
  }
  toggleRemember() {
    this.rememberable = this.checkboxTarget.checked
    this.saveToLocalStorage()
  }
  saveToLocalStorage() {
    localStorage.setItem(this.formElement().id, JSON.stringify(this.remmemberMeData()))
  }

}
