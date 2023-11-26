import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initialize() {
    this.element.setAttribute('data-action', `click->${this.identifier}#upToTop`)
  }
  upToTop() {
    document.scrollingElement.scrollTo(0, 0)
  }
}
