import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    klass: { type: String, default: "group flex justify-center items-center text-black" },
    buttonClass: { type: String, default: "flex flex-row w-fit justify-center items-center hover:text-sky-800" },
    linkClass: { type: String, default: "flex flex-row w-fit justify-center items-center" }
  }
  initialize() {
    this.initializeClass()
  }
  initializeClass() {
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
