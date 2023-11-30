import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["modal"]

  initialize() {
    if (this.element.querySelector('[data-controller*=modal]')) {
      this.element.querySelector('[data-controller*=modal]').setAttribute('data-button-component-target', 'modal')
      this.element.setAttribute('data-action', 'click->button-component#openModal')
    }
  }
  openModal() {
    this.modalTarget.classList.remove('hidden')
    this.element.dataset.action = this.element.dataset.action.replace("click->button-component#openModal", "")
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }

}
