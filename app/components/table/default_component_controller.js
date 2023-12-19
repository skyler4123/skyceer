import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['table', 'header', 'body']
  static values = {
    header: Array,
    body: Array,
    klass: { type: String, default: "" },
    tableClass: { type: String, default: "" },
    headerClass: { type: String, default: "" },
    bodyClass: { type: String, default: "" },

  }
  bodyValueChanged() {
    this.element.innerHTML = ""
    this.initializeTable()
    this.initializeTarget()
    this.initializeHeader()
    this.initializeBody()
    this.initializeClass()
  }
  initialize() {
    this.initializeValue()
    // this.initializeTable()
    // this.initializeTarget()
    // this.initializeHeader()
    // this.initializeBody()
    // this.initializeClass()
  }
  initializeValue() {
    this.klassValue = this.element.dataset.klass
    this.tableClassValue = this.element.dataset.tableClass
    this.headerClassValue = this.element.dataset.headerClass
    this.bodyClassValue = this.element.dataset.bodyClass
    this.headerValue =  	JSON.parse(this.element.dataset.header)
    this.bodyValue = JSON.parse(this.element.dataset.body)
  }
  initializeTable() {
    const table = document.createElement('table')
    const header = document.createElement('thead')
    const body = document.createElement('tbody')
    table.appendChild(header)
    table.appendChild(body)
    this.element.appendChild(table)
  }
  initializeTarget() {
    this.initializeTableTarget()
    this.initializeHeaderTarget()
    this.initializeBodyTarget()
  }
  initializeTableTarget() {
    this.element.querySelector('table').setAttribute(`data-${this.identifier}-target`, 'table')
  }
  initializeHeaderTarget() {
    this.element.querySelector('thead').setAttribute(`data-${this.identifier}-target`, 'header')
  }
  initializeBodyTarget() {
    this.element.querySelector('tbody').setAttribute(`data-${this.identifier}-target`, 'body')
  }
  initializeHeader() {
    const newHeaderRow = this.headerTarget.insertRow()
    this.headerValue.forEach((headerText) => {
      const cell = newHeaderRow.insertCell()
      let newText = document.createTextNode(headerText)
      cell.appendChild(newText)
    })
  }
  initializeBody() {
    this.bodyValue.forEach((row, index) => {
      const newBodyRow = this.bodyTarget.insertRow()
      row.forEach((cellText) => {
        const newCell = newBodyRow.insertCell()
        let newText = document.createTextNode(cellText)
        newCell.appendChild(newText)
      })
    })
  }
  initializeClass() {
    this.initializeKlass()
    this.initializeTableClass()
    this.initializeHeaderClass()
    this.initializeBodyClass()
  }
  initializeKlass() {
    this.element.classList = this.klassValue
  }
  initializeTableClass() {
    this.tableTarget.classList = this.tableClassValue
  }
  initializeHeaderClass() {
    this.headerTarget.classList = this.headerClassValue
  }
  initializeBodyClass() {
    this.bodyTarget.classList = this.bodyClassValue
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }


}

