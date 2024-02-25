import ApplicationController from './application_controller'
export default class extends ApplicationController {
  initialize() {
    this.element.dataset.action = (this.element.dataset.action || "") + `
      button-component:dispatch->${this.identifier}#receiver
    `
  }

  receiver({ detail: { event } }) {
    console.log(event)
      this.dispatchGlobal(event)
    // }
  }

  dispatchGlobal(event) {
    this.dispatch('dispatch', { detail: { event: event } })
  }

  // decreaseInterval(event) {
  //   if (this.eventValue[event.id]?.interval) {
  //     const newEventObject = this.eventValue
  //     const newInterval = Math.max(newEventObject[event.id].interval - 1, 0)
  //     newEventObject[event.id] = { ...newEventObject[event.id], interval: newInterval }
  //     this.eventValue = { ...this.eventValue, ...newEventObject }
  //   }
  // }

  // blockEvent(event) {
  //   this.eventValue[event.id].block = true
  // }

  // releaseEvent(event) {
  //   this.eventValue[event.id].block = false
  // }

  // toggleEvent(event) {
  //   this.eventValue[event.id].block = !this.eventValue[event.id].block
  // }



}
