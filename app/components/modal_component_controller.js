import { twMerge } from 'tailwind-merge'
import { Camelize } from "./helpers";
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['background', 'content']
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean, default: false },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
  }

  initialize() {
    this.optionsValue = Camelize(this.optionsValue)
    this.initializeID()
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
    // this.element.classList.remove('hidden')
  }

  initializeClass() {
    this.element.className = twMerge("fixed top-0 hidden open:flex animate-fade-in", this.element.className , this.klass)
    this.backgroundTarget.className = twMerge('w-screen h-screen bg-gray-300/50 cursor-pointer', this.backgroundTarget.className, this.backgroundClass)
    this.contentTarget.className = twMerge('absolute z-30 flex justify-center items-center w-fit h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', this.contentTarget.className, this.contentClass)
  }

  initializeAction() {
    if (this.eventId) {
      this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
    }
    this.backgroundTarget.dataset.action = (this.backgroundTarget.dataset.action || '') + ' ' + `click->${this.identifier}#close`
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
      this.backgroundTarget.setAttribute('open', '')
      this.contentTarget.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
      this.backgroundTarget.removeAttribute('open')
      this.contentTarget.removeAttribute('open')
    }
  }

  get klass() {
    return this.optionsValue.klass
  }
  get backgroundClass() {
    return this.optionsValue.backgroundClass
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
    return this.element.parentNode.closest('[data-controller*="button-component"]')
  }
  get parentButtonEventId() {
    return JSON.parse(this.parentButtonController?.dataset.buttonComponentOptionsValue)?.events[0]?.id
  }


}