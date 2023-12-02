import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['svg']
  static values = {
    klass: { type: String, default: "" },
    svgClass: { type: String, default: "w-4 h-4" }
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initialize() {
    if (this.dataComponent().klass) {
      this.klassValue = this.dataComponent().klass
    }
    if (this.dataComponent().svg_class) {
      this.svgClassValue = this.dataComponent().svg_class
    }

    if (this.element.childElementCount != 0) { return }
    this.element.appendChild(this.svgNode().cloneNode(true))
    this.element.classList = this.klassValue
    this.svgTarget.classList = this.svgClassValue
  }
  dataComponent() {
    return JSON.parse(this.element.dataset.component)
  }
  svgNode() {
    const svg = `<svg data-${this.identifier}-target="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>`
    return document.createRange().createContextualFragment(svg)
  }
}
