import { Controller } from "@hotwired/stimulus";

const svg = `<svg data-icon--small-arrow-component-target="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
            </svg>`

const svgNode = document.createRange().createContextualFragment(svg)
export default class extends Controller {
  static targets = ['svg']
  static values = {
    svgClass: {type: String, default: "w-4 h-4 text-gray-300"}
  }
  connect() {
    // console.log(this.element);
  }
  initialize() {
    this.element.appendChild(svgNode.cloneNode(true))
    this.svgTarget.classList = this.svgClassValue
  }
}
