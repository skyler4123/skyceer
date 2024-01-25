import { twMerge } from 'tailwind-merge'
import Sortable from 'sortablejs';
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['li']
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
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
    this.element.querySelectorAll('li').forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, 'li')
    })
  }

  initializeClass() {
    this.element.className = twMerge(this.element.className, this.klass)
    this.liTargets.forEach((target) => {
      target.className = twMerge(target.className, this.liClass)
    })
  }

  initializeAction() {
    if (this.event) {
      this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
    }
    if (this.isSortable) {
      Sortable.create(this.element, this.sortableOptions)
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
      this.liTarget.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
      this.liTarget.removeAttribute('open')
    }
  }

  get klass() {
    return this.optionsValue.klass
  }
  get liClass() {
    return this.optionsValue.liClass
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
  get isSortable() {
    return this.optionsValue.isSortable
  }
  get sortableOptions() {
    return this.optionsValue.sortableOptions
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