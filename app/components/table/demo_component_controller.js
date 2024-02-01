import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", "table", "head", "headeRow", "headeCell", "body", "bodyRow", "bodyCell"]
  static values = {
    header: { type: Array },
    body: { type: Array },
    klass: { type: String, default: "" },
    tableClass: { type: String, default: "" },
    headClass: { type: String, default: "" },
    headRowClass: { type: String, default: "" },
    headCellClass: { type: String, default: "" },
    bodyClass: { type: String, default: "" },
    bodyRowClass: { type: String, default: "" },
    bodyCellClass: { type: String, default: "" }
  }

  initialize() {
    this.initializeTarget()
    this.initializeHTML()
    this.initializeClass()

    this.initializeComplete()
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeTarget() {
    // this.element.querySelector('template').setAttribute(`data-${this.identifier}-target`, 'template')
  }

  initializeHTML() {
    if (this.dir) {
      this.element.setAttribute('dir', this.dir)
    }
    if (this.hasTemplateTarget) {
      morphdom(this.templateTarget, this.initHTML)
    } else {
      morphdom(this.tableTarget, this.initHTML)
    }
  }

  initializeClass() {
    this.element.className = this.klassValue
  }

  get initHTML() {
    return `
      <table class="${this.tableClassValue}" data-${this.identifier}-target="table">
        <thead class="${this.headClassValue}" data-${this.identifier}-target="headers">
          <tr class="${this.headRowClassValue}">
            <th class="${this.headCellClassValue}" data-${this.identifier}-target="header">${this.headerValue[0]}</th>
            <th class="${this.headCellClassValue}" data-${this.identifier}-target="header">${this.headerValue[1]}</th>
            <th class="${this.headCellClassValue}" data-${this.identifier}-target="header">${this.headerValue[2]}</th>
          </tr>
        </thead>
        <tbody class="${this.bodyClassValue}" data-${this.identifier}-target="body">
          ${this.bodyValue.map((row) => 
            `
            <tr class="${this.bodyRowClassValue}" data-${this.identifier}-target="row">
              <td class="${this.bodyCellClassValue}" data-${this.identifier}-target="cell" >${row[0]}</td>
              <td class="${this.bodyCellClassValue}" data-${this.identifier}-target="cell" >${row[1]}</td>
              <td class="${this.bodyCellClassValue}" data-${this.identifier}-target="cell" >${row[2]}</td>
            </tr>
            `
            ).join('')}
        </tbody>
      </table>

    `
  }

  bodyValueChanged() {
    this.initializeHTML()
  }
  connect() {
    // console.log("Hello, Stimulus!", this);
  }
}
