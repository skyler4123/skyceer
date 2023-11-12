import { Controller } from "@hotwired/stimulus";

const svg = `<svg data-icon--clock-component-target="svg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
            </svg>`
                
const svgNode = document.createRange().createContextualFragment(svg)
export default class extends Controller {
  static targets = ['svg']
  static values = {
    svgClass: {type: String, default: "w-6 h-6"}
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initialize() {
    this.element.appendChild(svgNode.cloneNode(true))
    this.svgTarget.classList = this.svgClassValue
  }
}