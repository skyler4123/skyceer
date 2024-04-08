import ApplicationController from './application_controller'
export default class extends ApplicationController {
  initialize() {
    this.element.dataset.action = (this.element.dataset.action || "") + `
    accordion:dispatch->${this.identifier}#receiver
    box:dispatch->${this.identifier}#receiver
    button:dispatch->${this.identifier}#receiver
    carousel:dispatch->${this.identifier}#receiver
    hr:dispatch->${this.identifier}#receiver
    icon:dispatch->${this.identifier}#receiver
    img:dispatch->${this.identifier}#receiver
    input:dispatch->${this.identifier}#receiver
    link:dispatch->${this.identifier}#receiver
    list:dispatch->${this.identifier}#receiver
    mockup:dispatch->${this.identifier}#receiver
    modal:dispatch->${this.identifier}#receiver
    popover:dispatch->${this.identifier}#receiver
    ratio:dispatch->${this.identifier}#receiver
    select:dispatch->${this.identifier}#receiver
    skeleton:dispatch->${this.identifier}#receiver
    tab:dispatch->${this.identifier}#receiver
    tab:dispatch->${this.identifier}#receiver
    text:dispatch->${this.identifier}#receiver
    toast:dispatch->${this.identifier}#receiver
    video:dispatch->${this.identifier}#receiver
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
