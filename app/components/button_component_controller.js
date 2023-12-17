import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button", "link", "modal", "popover"]
  static values = {
    klass: { type: String, default: "flex flex-row w-fit justify-center items-center cursor-pointer" },
    buttonClass: { type: String, default: "flex flex-row w-fit justify-center items-center" },
    linkClass: { type: String, default: "flex flex-row w-fit justify-center items-center" }
  }

  initialize() {
    this.initializeTarget()
    this.initializeClass()

    this.initializeComplete()
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }
  initializeTarget() {
    this.element.querySelector('button').setAttribute(`data-${this.identifier}-target`, 'button')
    this.element.querySelector('a')?.setAttribute(`data-${this.identifier}-target`, 'link')
    this.element.querySelector('[data-controller*=modal]')?.setAttribute(`data-${this.identifier}-target`, 'modal')
    this.element.querySelector('[data-controller*=popover]')?.setAttribute(`data-${this.identifier}-target`, 'popover')
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
  initializeAttribute() {
    // this.element.setAttribute('tabindex', 0)
  }
  openModal() {
    this.modalTarget.classList.remove('hidden')
    this.element.dataset.action = this.element.dataset.action.replace(`click->${this.identifier}#openModal`, "")
  }
  openPopover() {
    this.popoverTarget.classList.remove('hidden')
    this.popoverTarget.classList.add('flex')
  }
  closePopover() {
    this.popoverTarget.classList.remove('flex')
    this.popoverTarget.classList.add('hidden')
  }
}
