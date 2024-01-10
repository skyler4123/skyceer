import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template"]
  static values = {
    isOpen: { type: Boolean, default: true },
    action: { type: String },
    eventListener: { type: String },
    eventId: { type: String },

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
    if (!this.eventListenerValue) { return }

    if (this.eventListenerValue === 'click') {
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `click->${this.identifier}#${this.actionValue}`
    }
    if (this.eventListenerValue === 'hover') {
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `mouseenter->${this.identifier}#${this.actionValue} mouseleave->${this.identifier}#${this.actionValue}`
    }
  }

  globalDispatch({ detail: { payload } }) {
    if (this.eventIdValue === payload.id) {
      if (payload.action === "toggle") { this.toggle() }
      if (payload.action === "open") { this.open() }
      if (payload.action === "close") { this.close() }
    }
  }

  toggle(event) {
    this.isOpenValue = !this.isOpenValue
    if (event) {
      event.stopPropagation()
    }
  }

  open(event) {
    this.isOpenValue = true
    if (event) {
      event.stopPropagation()
    }
  }

  close(event) {
    this.isOpenValue = false
    if (event) {
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
