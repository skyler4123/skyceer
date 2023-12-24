import { Controller } from "@hotwired/stimulus";

/////////////////////////////////////////////////////////////////////////////////////////////////////
const outletHelper = ['helper']
const targetHelper = ['template']
export default class extends Controller {
  initialize() {
    this.initializeOutlet()
  }
  initializeOutlet() {
    this.element.setAttribute(`data-${this.identifier}-helper-outlet`, "body")
  }
  helperOutletConnected() {
    this.helperOutlet.initTarget(this)
    this.helperOutlet.initValue(this)
    this.helperOutlet.initHTML(this)
    this.initializeFunction()
    this.helperOutlet.initCompleted(this)
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  static outlets = [...outletHelper]
  static targets = ['headers', 'header', 'bodies', 'body', ...targetHelper]
  static values = {
    isOutletCompleted: { type: Boolean },
    klass: String,
    headersClass: String,
    bodiesClass: String,
    headerClass: { type: String, default: "cursor-pointer" },
    bodyClass: { type: String, default: "hidden open:flex" },
    openIndex: { type: Number }
  }
  initializeFunction() {
    if (!this.hasHeadersTarget || !this.hasBodiesTarget) { return }

    this.initializeTarget()
    this.initializeClass()
    this.initializeAction()
  }
  initializeTarget() {
    this.initializeHeaderTarget()
    this.initializeBodyTarget()
  }
  initializeHeaderTarget() {
    Array.from(this.headersTarget.children).forEach((header) => {
      header.setAttribute(`data-${this.identifier}-target`, 'header')
    })
  }
  initializeBodyTarget() {
    Array.from(this.bodiesTarget.children).forEach((body) => {
      body.setAttribute(`data-${this.identifier}-target`, 'body')
    })
  }
  initializeClass() {
    this.initializeHeaderClass()
    this.initializeBodyClass()
  }
  initializeHeaderClass() {
    this.headerTargets.forEach((header) => {
      header.className = header.className.concat(' ' + this.headerClassValue)
    })
  }
  initializeBodyClass() {
    this.bodyTargets.forEach((body, index) => {
      body.className = body.className.concat(' ' + this.bodyClassValue)
    })
  }
  initializeAction() {
    this.initializeHeaderAction()
  }
  initializeHeaderAction() {
    this.headerTargets.forEach((header, index) => {
      header.setAttribute('data-action', `click->${this.identifier}#changeOpenIndex`)
      header.setAttribute(`data-${this.identifier}-open-index-param`, index)
    })
  }
  changeOpenIndex(event) {
    this.openIndexValue = event.params.openIndex
  }
  openIndexValueChanged() {
    if (!this.hasHeadersTarget) { return }
    
    this.headerTargets.forEach((header) => {
      header.removeAttribute('open')
    })
    this.headerTargets[this.openIndexValue].setAttribute('open', '')

    this.bodyTargets.forEach((body) => {
      body.removeAttribute('open')
    })
    this.bodyTargets[this.openIndexValue].setAttribute('open', '')
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
