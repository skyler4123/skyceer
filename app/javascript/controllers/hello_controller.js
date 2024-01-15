import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize() {
    console.log("Hello, Stimulus!", this.element);
  }
}
