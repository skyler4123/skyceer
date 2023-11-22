import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

  close() {
    console.log("Close from modal", this.element)
    this.element.classList.add('hidden')
    this.openOrCloseValue = "close"
    this.element.parentNode.closest('[data-controller]').setAttribute('data-action', 'click->button-component#openModal')
  }

}
