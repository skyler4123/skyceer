
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", "content", "input", "toggle"]
  static values = {
    isOpen: { type: Boolean, default: true },
    event: { type: Object },

    isAutoSubmit: { type: Boolean, default: true },
    autoSubmitUrl: { type: String },
    payload: { type: String },
    httpMethod: { type: String, default: 'get' },
    setTimeoutTime: { type: Number, default: 5000 },
    setTimeoutId: { type: Number },

    name: { type: String },

    klass: { type: String, default: "" },
    toggleClass: { type: String, default: "" },
    klassDefault: { type: String, default: "relative inline-flex items-center cursor-pointer" },
    toggleClassDefault: { type: String, default: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" },
  }
  initialize() {
    this.initializeID()
    this.initializeClass()
    this.initializeAction()
    
    this.initializeComplete()
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
    morphdom(this.templateTarget, this.initHTML())
  }

  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassValue + ' ' + this.klassDefaultValue
    this.toggleTarget.className = this.toggleTarget.className + ' ' + this.toggleClassDefaultValue + ' ' + this.toggleClassValue
  }

  initializeAction() {
    this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
    this.inputTarget.dataset.action = (this.inputTarget.dataset.action || "") + ' ' + `input->${this.identifier}#input keydown.enter->${this.identifier}#enter` 
    if (!this.eventValue) { return }

    if (this.eventValue.listener === 'click') {
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `click->${this.identifier}#${this.eventValue.action}`
    }
    if (this.eventValue.listener === 'hover') {
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `mouseenter->${this.identifier}#${this.eventValue.action} mouseleave->${this.identifier}#${this.eventValue.action}`
    }
  }

  globalDispatch({ detail: { payload } }) {
    if (this.eventValue.id === payload.event.id) {
      eval(`this.${payload.event.action}(payload)`)
    }
  }

  toggle(event) {
    this.isOpenValue = !this.isOpenValue
    if (event.target) {
      event.stopPropagation()
    }
  }

  open(event) {
    this.isOpenValue = true
    if (event.target) {
      event.stopPropagation()
    }
  }

  close(event) {
    this.isOpenValue = false
    if (event.target) {
      event.stopPropagation()
    }
  }

  isOpenValueChanged(value, previousValue) {
    if (this.isOpenValue) {
      this.element.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
    }
  }

  input(event) {
    console.log(event, this.inputTarget.checked)
    if (this.isAutoSubmitValue) {
      clearTimeout(this.setTimeoutIdValue)
      let timeoutId = setTimeout(() => {

        console.log('Auto submit is on!')
      }, this.setTimeoutTimeValue)
      this.setTimeoutIdValue = timeoutId
    }
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
