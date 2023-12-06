import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button", "link", "modal"]
  static values = {
    klass: { type: String, default: "flex flex-row w-fit justify-center items-center cursor-pointer" },
    buttonClass: { type: String, default: "flex flex-row w-fit justify-center items-center" },
    linkClass: { type: String, default: "flex flex-row w-fit justify-center items-center" }
  }

  initialize() {
    this.initializeTarget()
    this.initializeClass()
    this.initializeModal()
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
    this.element.classList.remove('hidden')
  }
  initializeTarget() {
    this.element.querySelector('button').setAttribute(`data-${this.identifier}-target`, 'button')
    this.element.querySelector('a')?.setAttribute(`data-${this.identifier}-target`, 'link')
    this.element.querySelector('[data-controller*=modal]')?.setAttribute(`data-${this.identifier}-target`, 'modal')
  }
  initializeClass() {
    this.klassValue.split(' ').forEach((klass) => {
      this.element.classList.add(klass)
    })
    this.buttonClassValue.split(' ').forEach((klass) => {
      this.buttonTarget.classList.add(klass)
    })
    this.hasLinkTarget && this.linkClassValue.split(' ').forEach((klass) => {
      this.linkTarget.classList.add(klass)
    })

  }
  initializeModal() {
    this.hasModalTarget && this.modalTarget.setAttribute('data-action', `click->${this.identifier}#openModal`)
  }
  openModal() {
    this.modalTarget.classList.remove('hidden')
    this.element.dataset.action = this.element.dataset.action.replace(`click->${this.identifier}#openModal`, "")
  }
}
