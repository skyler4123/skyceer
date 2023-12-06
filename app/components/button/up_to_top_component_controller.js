import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    klass: { type: String, default: "cursor-pointer" }
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initialize() {
    this.initializeKlass()
    this.initializeAction()
  }
  initializeKlass() {
    this.klassValue.split(' ').forEach((klass) => {
      this.element.classList.add(klass)
    })
  }
  initializeAction() {
    this.element.setAttribute('data-action', `click->${this.identifier}#upToTop`)
  }
  upToTop() {
    document.scrollingElement.scrollTo(0, 0)
  }
}
