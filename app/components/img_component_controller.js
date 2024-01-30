import { twMerge } from 'tailwind-merge'
import { Camelize } from "./helpers";
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['img']
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
  }

  initialize() {
    this.optionsValue = Camelize(this.optionsValue)
    this.initializeID()
    this.initializeHTML()
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

  initializeHTML() {
    this.element.innerHTML = this.initHTML
  }

  initializeClass() {
    this.element.className = twMerge(this.element.className ,this.klass)
    this.imgTarget.className = twMerge(this.imgTarget.className, this.imgClass)
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
      this.imgTarget.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
      this.imgTarget.removeAttribute('open')
    }
  }
  rotate() {
    this.isOpenValue = !this.isOpenValue
  }

  get klass() {
    return this.optionsValue.klass
  }
  get imgClass() {
    return this.optionsValue.imgClass
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
    return this.element.parentNode.closest('[data-controller*="button-component"]')
  }
  get parentButtonEventId() {
    return JSON.parse(this.parentButtonController?.dataset.buttonComponentOptionsValue)?.events[0]?.id
  }
  get url() {
    return this.optionsValue.url
  }
  get alt() {
    return this.optionsValue.alt
  }
  get initHTML() {
    return `
      <img data-${this.identifier}-target="img" src="${this.url}" alt="${this.alt}">
    `
  }


}
