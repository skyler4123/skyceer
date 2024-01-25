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

  initializeHTML() {
    this.element.innerHTML = this.initHTML
  }

  initializeClass() {
    this.element.className = twMerge('w-full', this.element.className, this.klass)
  }

  initializeAction() {
    if (this.event) {
      this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
    }
    if (this.isControl) {
      this.element.setAttribute('controls', '')
    }
    if (this.isAutoplay) {
      this.element.setAttribute('autoplay', '')
    }
    if (this.isMuted) {
      this.element.setAttribute('muted', '')
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

  get klass() {
    return this.optionsValue.klass
  }
  get videoClass() {
    return this.optionsValue.videoClass
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
  get isControl() {
    return this.optionsValue.isControl || true
  }
  get isAutoplay() {
    return this.optionsValue.isAutoplay || false
  }
  get isMuted() {
    return this.optionsValue.isMuted || false
  }
  get src() {
    return this.optionsValue.src
  }
  get url() {
    return this.optionsValue.url || this.src || 'https://flowbite.com/docs/videos/flowbite.mp4'
  }
  get type() {
    return this.optionsValue.type || 'video/mp4'
  }
  get initHTML() {
    return `
      <source src="${this.url}" type="${this.type}">
    `
  }
}