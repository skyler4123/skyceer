import morphdom from "morphdom";
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", "content", "uncheckedInput", "checkedInput", "toggle", "slider"]
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
    unchecked: { type: String, default: "0" },
    checked: { type: String, default: "1" },

    klass: { type: String, default: "" },
    contentClass: { type: String, default: "" },
    toggleClass: { type: String, default: "bg-gray-200 open:bg-blue-600" },
    sliderClass: { type: String, default: "bg-white" },
    klassDefault: { type: String, default: "" },
    contentClassDefault: { type: String, default: "cursor-pointer" },
    toggleClassDefault: { type: String, default: "relative w-11 h-6 rounded-full" },
    sliderClassDefault: { type: String, default: "absolute w-5 h-5 ml-0.5 rounded-full top-1/2 left-0 -translate-y-1/2 open:translate-x-full duration-200 ease-in-out" },
  }
  initialize() {
    this.initializeID()
    this.initializeHTML()
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

  initHTML() {
    return `
      <label data-${this.identifier}-target="content">
        <input data-${this.identifier}-target="uncheckedInput" type="hidden" name="${this.nameValue}" value="${this.uncheckedValue}">
        <input data-${this.identifier}-target="checkedInput" type="hidden" name="${this.nameValue}" value="${this.checkedValue}">
        <div data-${this.identifier}-target="toggle">
          <span data-${this.identifier}-target="slider"></span>
        </div>
      </label>
    `
  }

  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassValue + ' ' + this.klassDefaultValue
    this.contentTarget.className = this.contentTarget.className + ' ' + this.contentClassDefaultValue + ' ' + this.contentClassValue
    this.toggleTarget.className = this.toggleTarget.className + ' ' + this.toggleClassDefaultValue + ' ' + this.toggleClassValue
    this.sliderTarget.className = this.sliderTarget.className + ' ' + this.sliderClassDefaultValue + ' ' + this.sliderClassValue
  }

  initializeAction() {
    this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
    this.element.dataset.action = (this.element.dataset.action || "") + ' ' + `click->${this.identifier}#toggle` 
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
      this.toggleTarget.setAttribute('open', '')
      this.sliderTarget.setAttribute('open', '')
      this.checkedInputTarget.removeAttribute('disabled')
      this.uncheckedInputTarget.setAttribute('disabled', '')
    } else {
      this.element.removeAttribute('open')
      this.toggleTarget.removeAttribute('open')
      this.sliderTarget.removeAttribute('open')
      this.uncheckedInputTarget.removeAttribute('disabled')
      this.checkedInputTarget.setAttribute('disabled', '')
    }
  }

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
