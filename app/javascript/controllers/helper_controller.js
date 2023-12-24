import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
    // console.log('User Controller')
  }
  initialize() {
    // console.log(this.table())
  }
  show(that) {
    console.log('My name is Skyler from stimulus helper', that)
  }
}
