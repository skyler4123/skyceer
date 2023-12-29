import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button", "icon", "header", "body"]
  static values = {
    klass: { type: String, default: "relative inline-block group" },
    buttonClass: { type: String, default: "" },
    iconClass: { type: String, default: "rotate-0 open:rotate-180 duration-250" },
    bodyClass: { type: String, default: "h-0 opacity-0 open:h-fit open:flex open:opacity-100 absolute z-10 transition-opacity duration-500 ease-in-out" }
  }

  initialize() {
    // this.initializeTarget()
    // this.initializeHTML()
    // this.initializeClass()

    this.initializeCompleted()
  }
  initializeCompleted() {
    this.element.classList.remove('hidden')
  }


  connect() {
    // console.log(this.identifier, this.element);
  }
  toggleDropdown() {
    this.bodyTarget.toggleAttribute('open')
    this.rotateIcon()
  }
  rotateIcon() {
    this.iconTarget.toggleAttribute('open')
  }
}
