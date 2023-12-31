import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  initialize() {
    // this.initializeTarget()
    // this.initializeClass()
    // this.initializeAction()

    this.initializeComplete()
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
