import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["modal"]
  static outlets = [""]
  initialize() {
    this.element.querySelector('[data-controller*=modal]').setAttribute('data-button-component-target', 'modal')
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }

}
