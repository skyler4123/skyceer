import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['headers', 'header', 'bodies', 'body']
  static values = {
    klass: String,
    headersClass: String,
    bodiesClass: String,
    headerClass: { type: String, default: "cursor-pointer" },
    bodyClass: { type: String, default: "hidden open:flex" },
    openIndex: { type: Number }
  }

  initialize() {
    this.initializeID()
    this.initializeTarget()
    this.initializeHTML()
    this.initializeClass()

    this.initializeComplete()
  }
  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}-${crypto.randomUUID()}`
    }
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
    this.dispatch('dispatch', { detail: { payload: { id: this.element.id, action: "complete", controller: this } } })
  }

  initializeTarget() {
    this.initializeHeaderTarget()
    this.initializeBodyTarget()
  }

  initializeHeaderTarget() {
    Array.from(this.headersTarget.children).forEach((target, index) => {
      target.setAttribute(`data-${this.identifier}-target`, 'header')
      target.setAttribute('data-action', `click->${this.identifier}#openIndex`)
      target.setAttribute(`data-${this.identifier}-open-index-param`, index)
    })
  }

  initializeBodyTarget() {
    Array.from(this.bodiesTarget.children).forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, 'body')
    })
  }

  initializeHTML() {

  }

  initializeClass() {
    this.initializeHeadersClass()
    this.initializeHeaderClass()
    this.initializeBodiesClass()
    this.initializeBodyClass()
  }

  initializeHeadersClass() {
    this.headersTarget.className = this.headersClassValue
  }

  initializeHeaderClass() {
    this.headerTargets.forEach((target) => {
      target.className = this.headerClassValue
    })
  }

  initializeBodiesClass() {
    this.bodiesTarget.className = this.bodiesClassValue
  }

  initializeBodyClass() {
    this.bodyTargets.forEach((target) => {
      target.className = this.bodyClassValue
    })
  }

  openIndex(event) {
    this.openIndexValue = event.params.openIndex
  }

  openIndexValueChanged(nextValue, previousValue) {
    this.headerTargets.forEach((header) => {
      header.removeAttribute('open')
    })
    this.headerTargets[nextValue].setAttribute('open', '')

    this.bodyTargets.forEach((body) => {
      body.removeAttribute('open')
    })
    this.bodyTargets[nextValue].setAttribute('open', '')
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
