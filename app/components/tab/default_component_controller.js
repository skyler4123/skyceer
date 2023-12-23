import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['headers', 'header', 'bodies', 'body']
  static values = {
    klass: String,
    headersClass: String,
    bodiesClass: String,
    headerClass: { type: String, default: "cursor-pointer" },
    bodyClass: { type: String, default: "hidden open:flex" },
    openIndex: { type: Number, default: 0 }
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
      if (Array.isArray(values[key])) {
        this.element.setAttribute(`data-${this.identifier}-${key.replaceAll('_', '-')}-value`, JSON.stringify(values[key]))
      } else {
        this.element.setAttribute(`data-${this.identifier}-${key.replaceAll('_', '-')}-value`, JSON.stringify(values[key]).replaceAll('"', ''))
      }
    })
    this.element.removeAttribute('data-value')
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
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
      this.headerClassValue.split(' ').forEach((klass) => {
        header.classList.add(klass)
      })
    })
  }
  initializeBodyClass() {
    this.bodyTargets.forEach((body, index) => {
      this.bodyClassValue.split(' ').forEach((klass) => {
        body.classList.add(klass)
      })
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
