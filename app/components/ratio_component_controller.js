import { twMerge } from 'tailwind-merge'
import { Camelize } from "./helpers";
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["ratio"]
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean, default: false },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
    ratio: { type: Number }
  }

  initialize() {
    console.log(this)
    this.optionsValue = Camelize(this.optionsValue)
    this.initializeID()
    this.initializeValue()
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
  
  initializeValue() {
    this.ratioValue = this.ratio
  }

  initializeHTML() {
    this.hasContent = !!this.element.innerHTML.trim()
    if (this.hasContent) { return }

    if (this.type === 'progressBar') {
      this.element.innerHTML = this.initHTML[this.type]
    }
  }

  initializeTarget() {
    Array.from(this.element.children).forEach((target) => {
      target.setAttribute(`data-${this.identifier}-target`, 'ratio')
    })
  }

  initializeClass() {
    this.element.className = twMerge(this.element.className, this.defaultClass[this.type]?.klass, this.klass, this.backgroundClass)
    this.ratioTarget.className = twMerge(this.ratioTarget.className, this.defaultClass[this.type]?.ratioClass, this.ratioClass)  
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

  ratioValueChanged(value, previousValue) {
    if (previousValue === undefined || previousValue === '') { return }
    let ratio
    if (this.isReverse) {
      ratio = 100 - this.ratioValue
    } else {
      ratio = this.ratioValue
    }
    this.ratioTarget.style.width = `${ratio}%`
    if (this.isShowRatio) {
      this.ratioTarget.textContent = this.ratioValue
    }
  }

  changeRatio(event) {
    this.ratioValue = event.value
  }

  get klass() {
    return this.optionsValue.klass
  }
  get backgroundClass() {
    return this.optionsValue.backgroundClass
  }
  get ratioClass() {
    return this.optionsValue.ratioClass
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
  get ratio() {
    return this.optionsValue.ratio || 50
  }
  get isReverse() {
    return this.optionsValue.isReverse || false
  }
  get isShowRatio() {
    return this.optionsValue.isShowRatio
  }
  get orientation() {
    return this.optionsValue.orientation || "vertical"
  }
  get initHTML() {
    return {
      progressBar: `
        <div data-${this.identifier}-target="ratio" style="width: ${this.ratioValue}%">
          ${this.isShowRatio ? this.ratioValue : ''}
        </div>
      `
    } 

  }
  get type() {
    return this.optionsValue.type
  }
  get defaultClass() {
    return {
      progressBar: {
        klass: 'w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700',
        ratioClass: 'bg-blue-600 h-2.5 rounded-full text-center p-0.5 leading-none duration-500 ease-out'
      }
    }
  }


}