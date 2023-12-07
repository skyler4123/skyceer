import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['arrow']
  static values = {
    klass: { type: String, default: 'group-hover:flex group-hover:flex-col justify-center items-center hidden absolute z-10 cursor-default' },
    arrowClass: { type: String, default: 'absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-white border-t border-l border-gray-300' }
  }
  initialize() {
    this.initializeParent()
    this.initializeTarget()
    this.initializeKlass()
    this.initializeArrowClass()
  }
  initializeParent() {
    this.parentController().classList.add('relative', 'group')
  }
  initializeTarget() {
    this.element.firstElementChild.setAttribute(`data-${this.identifier}-target`, 'arrow')
  }
  initializeKlass() {
    this.klassValue.split(' ').forEach((klass) => {
      this.element.classList.add(klass)
    })
  }
  initializeArrowClass() {
    this.arrowClassValue.split(' ').forEach((klass) => {
      this.arrowTarget.classList.add(klass)
    })
  }
  parentController() {
    return this.element.parentNode.closest('[data-controller]')
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
