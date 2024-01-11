import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template"]
  static values = {
    isOpen: { type: Boolean, default: true },
    event: { type: Object },

    label: { type: String, default: "Sample Text" },
    languageName: { type: String, default: "english" },
    languageKey: { type: String },

    klass: { type: String },
    textClass: { type: String },
    klassDefault: { type: String },
    textClassDefault: { type: String }
  }

  initialize() {
    this.initializeHTML()
    this.initializeClass()
    this.initializeAction()

    this.initializeComplete()
  }

  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeHTML() {
    morphdom(this.templateTarget, this.labelValue)
  }

  initializeClass() {
    this.element.className = this.klassValue
  }

  languageNameValueChanged() {
    if (this.languageKeyValue) {
      this.element.textContent = this.dictionary()[this.languageNameValue][this.languageKeyValue]
    } 
  }
  
  initializeAction() {
    this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
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

  dictionary() {
    return {
      english: {
        quickstart: "Quickstart",
        price: "Price"
      },
      vietnamese: {
        quickstart: "Nhanh",
        price: "Gia ban"
      },
      spain: {
        quickstart: "spain_fast",
        price: "spain_price"
      }
    }
  }
}
