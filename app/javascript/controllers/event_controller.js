import ApplicationController from './application_controller'
export default class extends ApplicationController {
  initialize() {
    this.element.dataset.action = (this.element.dataset.action || "") + `
    button:dispatch->${this.identifier}#receiver
    box:dispatch->${this.identifier}#receiver
    `
  }

  receiver({ detail: { event } }) {
    this.broadcastEvent(event)
  }

  broadcastEvent(event) {
    event  = this.normalizeEvent(event)
    console.log(event)
    this.dispatch(event.group, { detail: { event: event } })
  }

  isGlobalEvent(event) {
    return event.group === 'global' || this.isUndefined(event.group)
  }

  normalizeEvent(event) {
    if (this.isGlobalEvent(event)) {
      event = { ...event, group: 'global' }
    }
    return event
  }
}
