import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["header", "body", "grid", "icon"]
  static values = {
    klass: { type: String },
    headerClass: { type: String, default: 'flex flex-row justify-between items-center' },
    labelClass: { type: String },
    bodyClass: { type: String, default: "grid grid-rows-[0fr] open:grid-rows-[1fr] transition-all duration-250 ease-in-out text-sm text-slate-600 overflow-hidden duration-300" },
    gridClass: { type: String, default: 'overflow-hidden' },
    iconClass: { type: String, default: 'rotate-0 open:rotate-180 transition duration-250 ease-in-out' }
  }


  initialize() {
    this.initializeTarget()
    this.initializeClass()
    this.initializeAction()

    this.initializeCompleted()
  }
  initializeCompleted() {
    this.element.classList.remove('hidden')
  }
  initializeTarget() {
    this.headerTarget.querySelector('[data-controller*=icon]')?.setAttribute(`data-${this.identifier}-target`, 'icon')
  }
  initializeClass() {
    this.headerTarget.className = this.headerClassValue
    this.bodyTarget.className = this.bodyClassValue
    if (this.hasIconTarget) {
      this.iconTarget.className = this.iconClassValue
    }
    this.gridTarget.className = this.gridClassValue
  }
  initializeHeaderClass() {
    if (!this.hasHeaderClassValue) { return }

    this.headerClassValue.split(' ').forEach((klass) => {
      this.headerTarget.classList.add(klass)
    })
  }
  initializeIconClass() {
    if (!this.hasIconClassValue) { return }

    this.iconClassValue.split(' ').forEach((klass) => {
      this.iconTarget.classList.add(klass)
    })
  }
  initializeBodyClass() {
    if (!this.hasBodyClassValue) { return }

    this.bodyClassValue.split(' ').forEach((klass) => {
      this.bodyTarget.classList.add(klass)
    })
    this.bodyTarget.firstElementChild.classList.add('overflow-hidden')
  }
  initializeAction() {
    this.headerTarget.setAttribute('data-action', `click->${this.identifier}#toggle`)
  }
  toggle() {
    // this.headerTarget.toggleAttribute('open')
    this.bodyTarget.toggleAttribute('open')
    if (this.hasIconTarget) {
      this.iconTarget.toggleAttribute('open')
    }
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
