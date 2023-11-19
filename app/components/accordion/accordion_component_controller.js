import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["head"]

  initialize() {
    this.headTarget.classList.add('rounded-t-xl')
  }
}
