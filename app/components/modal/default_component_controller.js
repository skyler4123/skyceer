import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

  close() {
    this.element.classList.add('hidden')
    this.openOrCloseValue = "close"
    setTimeout(() => {
    this.element.parentNode.closest('[data-controller]').setAttribute('data-action', 'click->button-component#openModal')
    }, 500)
  }

}
