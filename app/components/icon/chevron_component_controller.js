import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['svg']
  static values = {
    klass: { type: String, default: "flex w-fit justify-center items-center transition-all duration-250 ease-in-out" },
    svgClass: { type: String, default: "w-4 h-4" },
    rotation: { type: String, default: "down" }
  }
  initialize() {
    if (this.element.childElementCount != 0) { return }
    
    this.initializeSvgNode()
    this.initializeKlass()
    this.initializeSvgClass()
    this.initializeRotation()
  }
  initializeKlass() {
    if (this.dataComponent().klass) {
      this.klassValue = this.dataComponent().klass
    }
    this.klassValue.split(' ').forEach((klass) => {
      this.element.classList.add(klass)
    })
  }
  initializeSvgNode() {
    this.element.appendChild(this.svgNode().cloneNode(true))
  }
  initializeSvgClass() {
    if (this.dataComponent().svg_class) {
      this.svgClassValue = this.dataComponent().svg_class
    }
    this.svgClassValue.split(' ').forEach((klass) => {
      this.svgTarget.classList.add(klass)
    })
  }
  initializeRotation() {
    if (this.dataComponent().rotation) {
      this.rotationValue = this.dataComponent().rotation
    }
    switch(this.rotationValue) {
      case "down":
        this.element.classList.add('rotate-0')
        break
      case "top":
        this.element.classList.add('rotate-180')
        break
      case "right":
        this.element.classList.add('-rotate-90')
        break
      case "left":
        this.element.classList.add('rotate-90')
        break
    } 
  }
  dataComponent() {
    return JSON.parse(this.element.dataset.component)
  }
  svgNode() {
    const svg = `<svg data-${this.identifier}-target="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>`
              
    return document.createRange().createContextualFragment(svg)
  }
}
