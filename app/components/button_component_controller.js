import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["modal"]
  static values = {
    klass: { type: String, default: "flex flex-row gap-x-2 w-fit justify-center items-center bg-blue-700 hover:bg-blue-800 rounded-lg text-white font-medium p-3" },
    buttonClass: { type: String, default: "flex flex-row w-fit justify-center items-center" },
    linkClass: { type: String, default: "flex flex-row w-fit justify-center items-center" }
  }

  initialize() {
    this.initializeClass()
    this.initializeModal()
  }
  initializeModal() {
    if (this.element.querySelector('[data-controller*=modal]')) {
      this.element.querySelector('[data-controller*=modal]').setAttribute('data-button-component-target', 'modal')
      this.element.setAttribute('data-action', 'click->button-component#openModal')
    }
  }
  openModal() {
    this.modalTarget.classList.remove('hidden')
    this.element.dataset.action = this.element.dataset.action.replace("click->button-component#openModal", "")
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initializeClass() {
    console.log(this.element.classList)
    if (!this.element.classList) { this.element.classList = this.klassValue }
    if (!this.button().classList) { this.button().classList = this.buttonClassValue }
    if (this.link()?.classList) { this.link().classList = this.linkClassValue }
  }
  button() {
    return this.element.querySelector('button')
  }
  link() {
    return this.element.querySelector('a')
  }

}
