import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  initialize() {
    this.element.dataset.action = (this.element.dataset.action || "") + ` button-component:toggle->${this.identifier}#toggle toggle-component:toggle->${this.identifier}#toggle`
  }
  toggle({ detail: { id, type } }) {
    console.log(id, type)
    this.dispatch('toggle', { detail: { id: id, type: type } })
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
