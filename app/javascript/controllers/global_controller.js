import ApplicationController from './application_controller'
export default class extends ApplicationController {
  static values = {
    event: { type: Object },
  }
  
  initialize() {
    this.element.dataset.action = (this.element.dataset.action || "") + `
      button-component:dispatch->${this.identifier}#reducer
    `
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
    // console.log(hljs)
    // document.addEventListener('DOMContentLoaded', (event) => {
    //   document.querySelectorAll('pre code').forEach((el) => {
    //     hljs.highlightElement(el);
    //   });
    // });
    // setTimeout(() => {
    //     hljs.highlightAll();
    // }, 3000)
    

  }

  reducer({ detail: { event } }) {
    console.log(event)
    // if (event.action === 'initialize') {
    //   if (this.eventValue[event.id]) { return }
    //   console.log(event)
    //   const newEventObject = this.eventValue
    //   newEventObject[event.id] = { block: event.block, interval: event.interval, timeout: event.timeout }
    //   this.eventValue = { ...this.eventValue, ...newEventObject }
    //   return
    // }

    // if (!(event.block === undefined)) {
    //   const newEventObject = this.eventValue
    //   const newBlock = event.block
    //   newEventObject[event.id] = { ...newEventObject[event.id], block: newBlock }
    //   this.eventValue = { ...this.eventValue, ...newEventObject }
    // }

    // if (event.action) {
      this.dispatchGlobal(event)
    // }
  }

  dispatchGlobal(event) {
    // if (this.eventValue[event.id]?.interval > 0 || this.eventValue[event.id]?.interval === undefined ) {
    //   if (this.eventValue[event.id]?.block === true || this.eventValue[event.id]?.block === event.listener || this.eventValue[event.id]?.block === event.action) { return }

    //   const timeout = this.eventValue[event.id]?.timeout || 0
    //   setTimeout(() => {
    //     this.dispatch('dispatch', { detail: { event: event } })
    //     console.log(event)
    //   }, timeout)
    //   this.decreaseInterval(event)
    // }

    this.dispatch('dispatch', { detail: { event: event } })
  }

  decreaseInterval(event) {
    if (this.eventValue[event.id]?.interval) {
      const newEventObject = this.eventValue
      const newInterval = Math.max(newEventObject[event.id].interval - 1, 0)
      newEventObject[event.id] = { ...newEventObject[event.id], interval: newInterval }
      this.eventValue = { ...this.eventValue, ...newEventObject }
    }
  }

  blockEvent(event) {
    this.eventValue[event.id].block = true
  }

  releaseEvent(event) {
    this.eventValue[event.id].block = false
  }

  toggleEvent(event) {
    this.eventValue[event.id].block = !this.eventValue[event.id].block
  }



}
