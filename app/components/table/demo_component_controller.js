import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    header: { type: Array },
    body: { type: Array }
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  initialize() {
    this.initializeInitialTargetAndValue()
    this.initializeFunction()
    this.initializeComplete()
  }
  initializeInitialTargetAndValue() {
    this.element.querySelectorAll('[data-target]')?.forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, target.dataset.target.replaceAll('_', '-'))
      target.removeAttribute('data-target')
    })
    const values = JSON.parse(this.element.dataset.value)
    Object.keys(values).forEach((key) => {
      if (!values[key]) { return }
      this.element.setAttribute(`data-${this.identifier}-${key.replaceAll('_', '-')}-value`, JSON.stringify(values[key]))
    })
    this.element.removeAttribute('data-value')
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  initializeFunction() {
    this.element.innerHTML = ""
    this.element.innerHTML = this.table()
  }
  headerValueChanged() {
    this.initializeFunction()
  }
  bodyValueChanged() {
    this.initializeFunction()
  }
  table() {
    return `
      <table class="bg-red-500" data-${this.identifier}-target="table">
        <thead data-${this.identifier}-target="headers">
          <tr>
            <th data-${this.identifier}-target="header">${this.headerValue[0]}</th>
            <th data-${this.identifier}-target="header">${this.headerValue[1]}</th>
            <th data-${this.identifier}-target="header">${this.headerValue[2]}</th>
          </tr>
        </thead>
        <tbody data-${this.identifier}-target="body">
          ${this.bodyValue.map((row) => 
            `
            <tr data-${this.identifier}-target="row">
              <td>${row[0]}</td>
              <td>${row[1]}</td>
              <td>${row[2]}</td>
            </tr>
            `
            ).join('')}
        </tbody>
      </table>

    `
  }
  connect() {
    // console.log("Hello, Stimulus!", this);
  }
}
