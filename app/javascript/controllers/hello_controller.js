import "choices"
import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
  static targets = ["element"]

  initialize() {
    const choices = new Choices(this.elementTarget);
  }
}
