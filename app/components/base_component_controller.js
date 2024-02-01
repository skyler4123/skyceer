import { twMerge } from 'tailwind-merge'
import { Camelize } from "./helpers";
import { Controller } from "@hotwired/stimulus";

export default class BaseComponentController extends Controller {
  static baseStaticField = 90;
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean },
    isFocus: { type: Boolean },
    isActive: { type: Boolean }
  }

  // connect() {
  //   console.log("Hello, Stimulus!", this.element);
  // }
  initialize() {
    this.optionsValue = Camelize(this.optionsValue)
    this.initializeID()

    // this.initializeComplete()
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

  get dir() {
    return this.optionsValue.dir || false
  }
  get klass() {
    return this.optionsValue.klass
  }
  get contentClass() {
    return this.optionsValue.contentClass
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
    return this.event?.id || this.optionsValue.eventId || this.parentButtonEventId
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
  get orientation() {
    return this.optionsValue.orientation || 'vertical'
  }
  get position() {
    return this.optionsValue.position
  }
  get type() {
    return this.optionsValue.type
  }
  get border() {
    return this.optionsValue.border
  }
  get color() {
    return this.optionsValue.color
  }
  get isInfinityScroll() {
    if (this.optionsValue.isInfinityScroll === undefined) {
      return true
    } else {
      return this.optionsValue.isInfinityScroll
    }
  }
  get timeInterval() {
    return this.optionsValue.timeInterval
  }

}