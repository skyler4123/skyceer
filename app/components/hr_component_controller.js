import { twMerge } from 'tailwind-merge'
import { Camelize } from "./helpers";
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['content', 'hr']
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

  initializeHTML() {
    this.element.innerHTML = this.initHTML
  }

  initializeTarget() {
    this.hrTarget.nextElementSibling?.setAttribute(`data-${this.identifier}-target`, 'content')
  }

  initializeClass() {
    this.element.className = twMerge(`w-full ${this.hasContentTarget ? 'relative' : ''}`, this.element.className, this.klass)
    this.hrTarget.className = twMerge("w-full h-0.5 bg-gray-200 border-0 dark:bg-gray-700", this.hrTarget.className, this.hrClass)
    if (this.hasContentTarget) {
      this.contentTarget.className = twMerge("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2", this.contentTarget.className, this.contentClass)
    }
  }

  initializeAction() {
    if (this.event) {
      this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
    }
  }

  get initHTML() {
    return `
      <hr data-${this.identifier}-target="hr">
      ${this.element.innerHTML}
    `
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
  get hrClass() {
    return this.optionsValue.hrClass
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
    return this.event.id || this.optionsValue.eventId
  }



}
