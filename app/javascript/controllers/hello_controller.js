import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    name: { type: String, default: "Skyler" }
  }
  connect() {
    // this.element.textContent = "Hello World!"
    // console.log(this.nameValue)
    // this.nameValue = "Ban Mai"
  }
  hover() {
    console.log(this.nameValue)
  }
}
