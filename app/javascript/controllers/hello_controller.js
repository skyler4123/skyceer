import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    name: { type: String }
  }
  connect() {
    // console.log(this)
  }
  hover() {
    // console.log(this.nameValue)
  }
}
