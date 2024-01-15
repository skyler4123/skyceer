import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  
  initialize() {
    this.element.dataset.action = (this.element.dataset.action || "") + `
    box-component:dispatch->${this.identifier}#reducer
    button-component:dispatch->${this.identifier}#reducer
    icon-component:dispatch->${this.identifier}#reducer
    img-component:dispatch->${this.identifier}#reducer
    input-component:dispatch->${this.identifier}#reducer
    list-component:dispatch->${this.identifier}#reducer
    modal-component:dispatch->${this.identifier}#reducer
    popover-component:dispatch->${this.identifier}#reducer
    switch-component:dispatch->${this.identifier}#reducer
    text-component:dispatch->${this.identifier}#reducer
    toast-component:dispatch->${this.identifier}#reducer
    toggle-component:dispatch->${this.identifier}#reducer
    `
  }

  reducer({ detail: { event } }) {
    console.log(event)
    this.dispatch('dispatch', { detail: { event: event } })
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
