import { twMerge } from 'tailwind-merge'
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["percentage"]
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean, default: false },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
    percentage: { type: Number }
  }

  initialize() {
    this.initializeID()
    this.initializeValue()
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
  get backgroundClass() {
    return this.optionsValue.backgroundClass
  }
  get percentageClass() {
    return this.optionsValue.percentageClass
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
  get isShowPercentage() {
    this.optionsValue.isShowPercentage
  }
  get orientation() {
    return this.optionsValue.orientation || "vertical"
  }
  
  initializeValue() {
    this.percentageValue = this.optionsValue.percentage
  }

  initializeHTML() {
    this.element.innerHTML = this.initHTML
  }

  initializeClass() {
    this.element.className = twMerge("w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700", this.element.className, this.klass, this.backgroundClass)
    this.percentageTarget.className = twMerge("bg-blue-600 h-2.5 rounded-full text-center p-0.5 leading-none duration-500 ease-out", this.percentageTarget.className, this.percentageClass)
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

  get initHTML() {
    return `
      <div data-${this.identifier}-target="percentage" style="width: ${this.percentageValue}%">
        ${this.isShowPercentage ? this.percentageValue : ''}
      </div>
    `
  }

  percentageValueChanged(value, previousValue) {
    if (previousValue === undefined || previousValue === '') { return }

    this.percentageTarget.style.width = `${this.percentageValue}%`
    if (this.isShowPercentage) {
      this.percentageTarget.textContent = this.percentageValue
    }
  }

  changePercentage(event) {
    this.percentageValue = event.value
  }
}