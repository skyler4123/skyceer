import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["header", "body", "icon"]
  static values = {
    klass: { type: String },
    headerClass: { type: String },
    labelClass: { type: String },
    bodyClass: { type: String, default: 'grid grid-rows-[0fr] open:grid-rows-[1fr] transition-all duration-250 ease-in-out' },
    iconClass: { type: String }
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initialize() {
    this.initializeTarget()
    this.initializeHeaderTarget()
    this.initializeBodyTarget()
    this.initializeIconTarget()

    this.initializeCompleted()
  }
  initializeCompleted() {
    this.element.classList.remove('hidden')
  }
  initializeTarget() {
    this.element.firstElementChild.setAttribute(`data-${this.identifier}-target`, 'header')
    this.element.lastElementChild.setAttribute(`data-${this.identifier}-target`, 'body')
    this.element.querySelector('[data-controller*=icon]').setAttribute(`data-${this.identifier}-target`, 'icon')
  }
  initializeHeaderTarget() {
    this.headerTarget.setAttribute('data-action', `click->${this.identifier}#open`)
    this.headerTarget.classList.add('group')
  }
  initializeBodyTarget() {
    this.bodyClassValue.split(' ').forEach((klass) => {
      this.bodyTarget.classList.add(klass)
    })
    this.bodyTarget.firstElementChild.classList.add('overflow-hidden')
  }
  initializeIconTarget() {
    this.iconTarget.classList.add('open:rotate-180')
  }
  open() {
    this.headerTarget.toggleAttribute('open')
    this.bodyTarget.toggleAttribute('open')
    this.iconTarget.toggleAttribute('open')
  }
}
