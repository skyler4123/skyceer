import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["header", "body", "icon"]
  static values = {
    klass: { type: String },
    headerClass: { type: String },
    bodyClass: { type: String, default: 'transition-all duration-250 h-0 overflow-hidden ease-in-out' },
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
    // this.bodyTarget.classList.add(`open:h-[${this.bodyTarget.scrollHeight}px]`)
    this.bodyTarget.classList.add(`open:h-[73px]`)
  }
  initializeIconTarget() {
    console.log(this.iconTarget.classList)
    this.iconTarget.classList.add('group-open:rotate-180')
  }
  open() {
    this.headerTarget.toggleAttribute('open')
    this.bodyTarget.toggleAttribute('open')
  }
}
