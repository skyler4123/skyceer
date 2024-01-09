import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  
  initialize() {
    this.element.dataset.action = (this.element.dataset.action || "") + `
    button-component:dispatch->${this.identifier}#reducer
    toggle-component:dispatch->${this.identifier}#reducer
    tab--default-component:dispatch->${this.identifier}#reducer
    `
  }

  reducer({ detail: { payload } }) {
    console.log(payload)
    this.dispatch('dispatch', { detail: { payload: payload } })
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
