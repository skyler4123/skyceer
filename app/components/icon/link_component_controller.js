import { Controller } from "@hotwired/stimulus";

const svg = `<svg data-icon--link-component-target="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
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
    if (this.element.childElementCount != 0) { return }
    this.element.appendChild(svgNode.cloneNode(true))
    this.svgTarget.classList = this.svgClassValue
  }
}
