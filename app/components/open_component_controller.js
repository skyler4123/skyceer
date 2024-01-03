import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  initialize() {
    this.element.dataset.action = (this.element.dataset.action || "") + ` button-component:open->${this.identifier}#open`
  }
  open({ detail: { id } }) {
    this.dispatch('open', { detail: { id: id } })
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
