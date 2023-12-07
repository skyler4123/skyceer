import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  initialize() {
    this.initializeParent()
  }
  initializeParent() {
    this.parentController().classList.add('relative', 'group')
  }
  parentController() {
    return this.element.parentNode.closest('[data-controller]')
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
