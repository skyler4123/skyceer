import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize() {
    console.log("Hello, Stimulus!", this.element);
    // setTimeout(() => {
    //   const otherController = this.application.getControllerForElementAndIdentifier(this.element, 'button-component')
    //   console.log(otherController)
    //   otherController.value = 10
    // }, 500)

  }
}
