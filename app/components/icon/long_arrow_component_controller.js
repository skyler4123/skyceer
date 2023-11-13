import { Controller } from "@hotwired/stimulus";

const svg = `<svg data-icon--long-arrow-component-target="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>`

const svgNode = document.createRange().createContextualFragment(svg)
export default class extends Controller {
  static targets = ['svg']
  static values = {
    svgClass: {type: String, default: "w-4 h-4"}
  }
  connect() {
    // console.log(this.element);
  }
  initialize() {
    this.element.appendChild(svgNode.cloneNode(true))
    console.log(this.svgTarget)
    this.svgTarget.classList = this.svgClassValue
  }
}
