import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static outlets = ["input--remember-me-component"]
  connect() {
    // console.log("Form stimulus controller")
  }
  remmemberMe() {
    this.inputRememberMeComponentOutlet.saveToLocalStorage()
  }

}
