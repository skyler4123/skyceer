import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    header: { type: Array },
    body: { type: Array }
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  static outlets = ['helper']
  initialize() {
    this.initializeOutlet()
    this.helperOutlet.initializeInitialTargetAndValue(this)
    this.initializeFunction()
    this.helperOutlet.initializeComplete(this)
  }
  initializeOutlet() {
    this.element.setAttribute(`data-${this.identifier}-helper-outlet`, "body")
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  initializeFunction() {
    this.element.innerHTML = ""
    this.element.innerHTML = this.initHTML()
  }
  headerValueChanged() {
    this.initializeFunction()
  }
  bodyValueChanged() {
    this.initializeFunction()
  }
  initHTML() {
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
