import { Controller } from "@hotwired/stimulus"


export default class extends Controller {

  initialize() {

  }

  copy() {
    this.dispatch("copy", { detail: { content: "From Demo" } })
    console.log("sent event from demo")
  }
}
