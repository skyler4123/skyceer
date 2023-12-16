import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button", "icon", "header", "body"]
  static values = {
    klass: { type: String, default: "relative inline-block group" },
    buttonClass: { type: String, default: "" },
    iconClass: { type: String, default: "" },
    bodyClass: { type: String, default: "hidden opacity-0 group-hover:flex group-hover:opacity-100 absolute z-10 bg-slate-100 p-2 rounded-md transition-all duration-[5000] ease-in-out" }
  }

  initialize() {
    this.initializeTarget()
    this.initializeClass()

    this.initializeComplete()
  }

  initializeComplete() {
    this.element.classList.remove('hidden')
  }
  initializeTarget() {
    this.initializeButtonTarget()
    this.initializeIconTarget()
    this.initializeBodyTarget()
  }
  initializeButtonTarget() {
    this.element.querySelector('[data-controller*=button]')?.setAttribute(`data-${this.identifier}-target`, 'button')
  }
  initializeIconTarget() {

    this.element.querySelector('[data-controller*=icon]')?.setAttribute(`data-${this.identifier}-target`, 'icon')
  }
  initializeBodyTarget() {
    this.element.lastElementChild.setAttribute(`data-${this.identifier}-target`, 'body')
  }
  initializeClass() {
    this.initializeKlass()
    this.initializeButtonClass()
    this.initializeIconClass()
    this.initializeBodyClass()
  }
  initializeKlass() {
    this.klassValue.split(' ').forEach((klass) => {
      this.element.classList.add(klass)
    })
  }
  initializeButtonClass() {
    if (!this.buttonClassValue) { return }

    this.buttonClassValue.split(' ').forEach((klass) => {
      this.buttonTarget.classList.add(klass)
    })
  }
  initializeIconClass() {
    if (!this.hasIconTarget) { return }
    if (!this.iconClassValue) { return }

    this.iconClassValue.split(' ').forEach((klass) => {
      this.iconTarget.classList.add(klass)
    })
  }
  initializeBodyClass() {
    if (!this.bodyClassValue) { return }

    this.bodyClassValue.split(' ').forEach((klass) => {
      this.bodyTarget.classList.add(klass)
    })
  }
  connect() {
    // console.log(this.identifier, this.element);
  }
}
