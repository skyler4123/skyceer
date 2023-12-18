import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

  initialize() {
    this.initializeAction()
  }
  initializeAction() {
    this.element.setAttribute('data-action', `click->${this.identifier}#toggleOpen`)
  }
  toggleOpen() {
    this.parentController().toggleAttribute('open')
  }
  parentController() {
    return this.element.parentNode.closest('[data-controller]')
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
