import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["messgaes"]
  static values = {
    boxchatId: String,
    currentUser: Object 
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initialize() {
    this.boxchatIdValue = this.element.dataset.boxchatId
    this.element.removeAttribute("data-boxchat-id")
  }
}
