import { twMerge } from 'tailwind-merge'
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['content', 'link', 'hidden']
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
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
  get id() {
    return this.element.id
  }
  get label() {
    return this.optionsValue.label
  }
  get isTest() {
    return this.optionsValue.test
  }
  get event() {
    return this.optionsValue.event
  }
  get eventId() {
    return this.event.id
  }
  get url() {
    return this.optionsValue.url
  }

  initializeHTML() {
    if (this.linkTarget.childElementCount === 0) { this.linkTarget.textContent = this.label }
    this.linkTarget.href = this.url
  }
  initializeClass() {
    this.element.className = twMerge(this.element.className, this.optionsValue.klass)
    this.contentTarget.className = twMerge(this.contentTarget.className, this.variant, this.optionsValue.contentClass)
    this.linkTarget.className = twMerge(this.linkTarget.className, this.optionsValue.linkClass)
  }

  initializeAction() {
    this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
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

  copyLink() {
    window.navigator.clipboard.writeText(this.url)
  }
  
}
