import { twMerge } from 'tailwind-merge'
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean, default: false },
    isFocus: { type: Boolean },
    isActive: { type: Boolean }
  }

  initialize() {
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
  get klass() {
    return this.optionsValue.klass
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


  initializeClass() {
    this.element.className = twMerge('w-1/3 h-5/6 bg-gray-200 rounded-lg text-black shadow-lg shadow-gray-500/50', this.element.className, this.positionClass()[this.position], this.klass)
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

  positionClass() {
    return {
      'left': 'fixed top-1/2 -left-1/2 z-20 -translate-x-full -translate-y-1/2 duration-200 ease-out open:translate-x-0 open:left-2 p-4',
      'right': 'fixed top-1/2 -right-1/2 z-20 translate-x-full -translate-y-1/2 duration-200 ease-out open:translate-x-0 open:right-2 p-4',
      'top': 'fixed -top-1/2 right-1/2 z-20 -translate-x-1/2 -translate-y-full duration-200 ease-out open:translate-y-0 open:top-2 p-4',
      'bottom': 'fixed -bottom-1/2 right-1/2 z-20 -translate-x-1/2 translate-y-full duration-200 ease-out open:translate-y-0 open:bottom-2 p-4',
    }
  }
}