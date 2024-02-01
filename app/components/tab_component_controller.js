import morphdom from "morphdom"
import { twMerge } from 'tailwind-merge'
import { Camelize } from "./helpers";
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["tab"]
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
    tabIndex: { type: Number }
  }

  initialize() {
    this.optionsValue = Camelize(this.optionsValue)
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
      morphdom(target, this.initTarget(target.outerHTML))
      // target.setAttribute(`data-${this.identifier}-target`, 'tab')
    })
  }

  initializeClass() {
    this.element.className = twMerge(this.element.className, this.klass)
    this.tabTargets.forEach((target) => {
      target.className = twMerge('hidden open:flex', target.className, this.tabClass)
    })
  }

  initializeAction() {
    if (this.eventId) {
      this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
    }
  }

  initTarget(contentHTML) {
    return `
      <div data-${this.identifier}-target="tab">
        ${contentHTML}
      </div>
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
    if (this.isRestore && previousValue !== undefined) {
      setTimeout(() => {
        this.tabIndexValue = this.restoreIndex
      }, this.restoreTimeout)
    }
  }

  get dir() {
    return this.optionsValue.dir || false
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
  get maxIndex() {
    return this.tabTargets.length - 1
  }
  get isRestore() {
    if (typeof this.optionsValue.restoreIndex != "undefined" || typeof this.optionsValue.restoreTimeout != "undefined") {
      return true
    }
    return this.optionsValue.isRestore
  }
  get restoreIndex() {
    return this.optionsValue.restoreIndex || 0
  }
  get restoreTimeout() {
    return this.optionsValue.restoreTimeout || 5000
  }
}