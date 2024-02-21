import ApplicationController from "../javascript/controllers/application_controller";

export default class ApplicationComponentController extends ApplicationController {
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
    isHover: { type: Boolean }
  }

  initialize() {
    this.optionsValue = this.camelizeOptionsValue(this.optionsValue)
    this.initializeID()
    this.initializeDir()
    this.initializeController()
  }
  connect() {
    if (this.isTest) { console.log(this) }
  }
  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}-${this.newUUID}`
    }
  }
  initializeDir() {
    if (this.dir) {
      this.element.setAttribute('dir', this.dir)
    }
  }

  initializeController() {
    this.element.dataset.controller = this.element.dataset.controller.trim()  
  }

  initializeAction() {
    if (this.eventId) {
      this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
    }
  }

  globalDispatch({ detail: { event } }) {
    if (this.eventId === event.id && this.id !== event.controller.id) {
      eval(`this.${event.action}(event)`)
    }
  }

  toggle() {
    this.isOpenValue = !this.isOpenValue
  }

  open() {
    this.isOpenValue = true
  }

  close() {
    this.isOpenValue = false
  }

  isOpenValueChanged(value, previousValue) {
    if (this.isOpenValue) {
      this.element.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
    }
  }

  get isOpen() {
    return this.optionsValue.isOpen
  }
  get isFocus() {
    return this.optionsValue.isFocus
  }
  get isActive() {
    return this.optionsValue.isActive
  }
  get isHover() {
    return this.optionsValue.isHover
  }
  get dir() {
    return this.optionsValue.dir || false
  }
  get klass() {
    return this.optionsValue.klass || ''
  }
  get labelClass() {
    return this.optionsValue.labelClass || ''
  }
  get id() {
    return this.element.id
  }
  get label() {
    return this.optionsValue.label
  }
  get hasLabel() {
    return typeof this.label !== 'undefined'
  }
  get isTest() {
    return this.optionsValue.isTest
  }
  get event() {
    return this.optionsValue.event
  }
  get events() {
    return this.optionsValue.events
  }
  get action() {
    return this.optionsValue.action
  }
  get actions() {
    return this.optionsValue.actions
  }
  get eventId() {
    return this.event?.id || this.optionsValue.eventId || this.parentButtonEventId
  }
  get eventIds() {
    return this.events.map((event) => (event.id))
  }
  get parentButtonController() {
    if (this.element.parentNode.closest('[data-controller]').dataset.controller.includes('button-component')) {
      return this.element.parentNode.closest('[data-controller*="button-component"]')
    } else {
      return false
    }
  }
  get parentButtonEventId() {
    if (this.parentButtonController) {
      return JSON.parse(this.parentButtonController.dataset.buttonComponentOptionsValue).events[0].id
    }
  }
  get type() {
    return this.optionsValue.type
  }
  get hasType() {
    return typeof this.type !== 'undefined'
  }
  get label() {
    return this.optionsValue.label
  }
  get hasContent() {
    return this.element.childElementCount > 0
  }

}
