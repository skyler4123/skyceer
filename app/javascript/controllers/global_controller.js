import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    eventIdBlocked: { type: Array, default: [] }
  }
  
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

    if (event.block === true) {
      this.dispatchGlobal(event)
      this.blockEvent(event)
      return
    }

    if (event.block === false) {
      this.dispatchGlobal(event)
      this.releaseEvent(event)
      return
    }

    if (event.block === 'toggle') {
      this.dispatchGlobal(event)
      this.toggleEvent(event)
      return
    }
    
    if (!this.eventIdBlockedValue.includes(event.id)) {
      this.dispatchGlobal(event)
      return
    }
  }

  dispatchGlobal(event) {
    this.dispatch('dispatch', { detail: { event: event } })
  }

  blockEvent(event) {
    if (this.eventIdBlockedValue.indexOf(event.id) === -1) {
      this.eventIdBlockedValue = [...this.eventIdBlockedValue, event.id]
    }
  }

  releaseEvent(event) {
    const blockArray = this.eventIdBlockedValue;
    const blockIndex = blockArray.indexOf(event.id);
    const x = blockArray.splice(blockIndex, 1);
    this.eventIdBlockedValue = blockArray
  }

  toggleEvent(event) {
    if (this.eventIdBlockedValue.indexOf(event.id) === -1) {
      this.blockEvent(event)
    } else {
      this.releaseEvent(event)
    }
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
