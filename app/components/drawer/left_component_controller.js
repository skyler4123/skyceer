import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

  initialize() {
    this.initializeTriggerController()
  }
  initializeTriggerController() {
    this.parentController().setAttribute('data-action', `click->${this.parentController().dataset.controller}#openDrawer`)
  }
  parentController() {
    return this.element.parentNode.closest('[data-controller]')
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
