import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["modal"]
  static outlets = [""]
  initialize() {
    if (this.element.querySelector('[data-controller*=modal]')) {
      this.element.querySelector('[data-controller*=modal]').setAttribute('data-button-component-target', 'modal')
      this.element.setAttribute('data-action', 'click->button-component#openModal')
    }
  }
  openModal() {
    this.modalTarget.classList.remove('hidden')
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }

}
