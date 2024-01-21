import { twMerge } from 'tailwind-merge'
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean, default: false },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
  }

  initialize() {
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
  get position() {
    return this.optionsValue.position
  }
  
  initializeClass() {
    this.element.className = twMerge(this.positionClass()[this.position], this.element.className, this.klass)
  }

  initializeAction() {
    if (!this.event) { return }
    
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

  positionClass() {
    return {
      'bottomLeft': 'open:flex absolute justify-center items-center left-0 bottom-0 translate-y-full py-2',
      'bottomCenter': 'open:flex absolute justify-center items-center right-1/2 bottom-0 translate-y-full translate-x-1/2 py-2',
      'bottomRight': 'open:flex absolute justify-center items-center right-0 bottom-0 translate-y-full py-2',
      'topRight': 'open:flex absolute justify-center items-center top-0 right-0 -translate-y-full py-2',
      'topLeft': 'open:flex absolute justify-center items-center top-0 left-0 -translate-y-full py-2',
      'topCenter': 'open:flex absolute justify-center items-center top-0 left-1/2 -translate-y-full -translate-x-1/2 py-2',
      'leftTop': 'open:flex absolute justify-center items-center left-0 top-0 -translate-x-full px-2',
      'leftBottom': 'open:flex absolute justify-center items-center left-0 bottom-0 -translate-x-full px-2',
      'leftCenter': 'open:flex absolute justify-center items-center left-0 top-1/2 -translate-x-full -translate-y-1/2 px-2',
      'rightTop': 'open:flex absolute justify-center items-center right-0 top-0 translate-x-full px-2',
      'rightBottom': 'open:flex absolute justify-center items-center right-0 bottom-0 translate-x-full px-2',
      'rightCenter': 'open:flex absolute justify-center items-center right-0 top-1/2 translate-x-full -translate-y-1/2 px-2'
    }
  }
}