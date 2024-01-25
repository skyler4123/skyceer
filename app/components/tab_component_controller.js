import { twMerge } from 'tailwind-merge'
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["tab"]
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean, default: false },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
    tabIndex: { type: Number }
  }

  initialize() {
    this.initializeCamelCase()
    this.initializeID()
    this.initializeTarget()
    this.initializeClass()
    this.initializeAction()

    this.initializeComplete()
  }
  connect() {
    if (this.isTest) { console.log(this) }
  }
  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}-${crypto.randomUUID()}`
    }
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeTarget() {
    Array.from(this.element.children).forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, 'tab')
    })
  }

  initializeClass() {
    this.element.className = twMerge(this.element.className, this.klass)
    this.tabTargets.forEach((target) => {
      target.className = twMerge('hidden open:flex', target.className, this.tabClass)
    })
  }

  initializeAction() {
    if (this.event) {
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

  tab(event) {
    this.tabIndexValue = event.value
  }

  tabNext() {
    if (this.tabIndexValue === this.maxIndex) {
      this.tabIndexValue = 0
    } else {
      this.tabIndexValue = this.tabIndexValue + 1
    }
  }

  tabBack() {
    if (this.tabIndexValue === 0) {
      this.tabIndexValue = this.maxIndex
    } else {
      this.tabIndexValue = this.tabIndexValue - 1
    }
  }

  tabIndexValueChanged(value, previousValue) {
    this.tabTargets.forEach((target) => {
      target.removeAttribute('open')
    })
    this.tabTargets[this.tabIndexValue].setAttribute('open', '')
  }

  get klass() {
    return this.optionsValue.klass
  }
  get tabClass() {
    return this.optionsValue.tabClass
  }
  get id() {
    return this.element.id
  }
  get isTest() {
    return this.optionsValue.isTest
  }
  get event() {
    return this.optionsValue.event
  }
  get eventId() {
    return this.event.id
  }
  get maxIndex() {
    return this.tabTargets.length - 1
  }

  initializeCamelCase() {
    let options = this.optionsValue
    options = Object.keys(options).reduce((result, key) => ({
      ...result,
      [this.camalize(key)]: options[key]
    }), {})
    if (options.actions) {
      options.actions = options.actions.map((action) => {
        return Object.keys(action).reduce((result, key) => ({
          ...result,
          [this.camalize(key)]: this.camalize(action[key])
        }), {})
      })
    }
    if (options.events) {
      options.events = options.events.map((event) => {
        return Object.keys(event).reduce((result, key) => {
          if (key === 'id') {
            return {
              ...result,
              [this.camalize(key)]: event[key]
            }
          }
          return {
            ...result,
            [this.camalize(key)]: this.camalize(event[key])
          }
        }, {})
      })
    }
    if (options.position) {
      options.position = this.camalize(options.position)
    }
    this.optionsValue = options
  }
  camalize(str) {
    if (typeof str === 'string' || str instanceof String) {
      return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    } else {
      return str
    }
  }
}