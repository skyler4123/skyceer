import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["sides"]

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initialize() {
    // this.element.querySelectorAll("")
    setInterval(() => {
      this.next()
    }, 2000)
  }

  previous() {
    this.sidesTarget.scrollBy(-1, 0)
  }

  next() {
    if (this.sidesTarget.scrollLeft == this.sidesTarget.scrollLeftMax) {
      this.sidesTarget.scrollTo(0, 0)
    }
    this.sidesTarget.scrollBy(1, 0)

  }
}
