import { twMerge } from 'tailwind-merge'
// import { Camelize } from "../helpers";
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['overlay']
  initialize() {
    // console.log("Hello, Stimulus!", this.element);
    // this.initializeTarget()
    this.initializeClass()
  }

  // initializeTarget() {
  // }

  initializeClass() {
    this.element.className = twMerge(this.element.className, this.defaultClass.klass)
    this.overlayTarget.className = twMerge(this.overlayTarget.className, this.defaultClass.overlay)
  }

  get defaultClass() {
    return {
      klass: 'absolute duration-300 top-0 left-0 ease-in-out',
      overlay: ''
    }
  }
  get parentController() {
    return this.element.closest('[data-controller]')
  }
}
