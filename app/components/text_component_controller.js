import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["text", 'editor', 'input']
  static values = {
    isOpen: { type: Boolean, default: true },
    event: { type: Object },
    canSendGlobalDispatch: { type: Boolean, default: false },
    canReceiveGlobalDispatch: { type: Boolean, default: false },
    canEdit: { type: Boolean, default: true },
    isOpenEditor: { type: Boolean, default: false },

    label: { type: String, default: "Sample Text" },
    languageName: { type: String, default: "english" },
    languageKey: { type: String },

    klass: { type: String },
    textClass: { type: String },
    editorClass: { type: String },
    klassDefault: { type: String },
    textClassDefault: { type: String, default: 'hidden open:flex' },
    editorClassDefault: { type: String, default: 'hidden open:flex' }
  }

  initialize() {
    this.initializeHTML()
    this.initializeTarget()
    this.initializeClass()
    this.initializeAction()

    this.initializeComplete()
  }

  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeHTML() {
    this.textTarget.textContent = this.labelValue
  }

  initializeTarget() {
    if (this.hasEditorTarget) {
      setTimeout(() => {
        this.editorTarget.querySelector('input').setAttribute(`data-${this.identifier}-target`, 'input')
        this.inputTarget.value = this.labelValue
      }, 500)
    }
  }

  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
    this.textTarget.className = this.textTarget.className + ' ' + this.textClassDefaultValue + ' ' + this.textClassValue
    this.editorTarget.className = this.editorTarget.className + ' ' + this.editorClassDefaultValue + ' ' + this.editorClassValue

  }

  labelValueChanged() {
    this.initializeHTML()
  }

  languageNameValueChanged() {
    if (this.languageKeyValue) {
      this.labelValue = this.dictionary()[this.languageNameValue][this.languageKeyValue]
    } 
  }
  
  initializeAction() {
    if (this.eventValue?.id && this.eventValue?.listener && this.eventValue?.action) {
      this.canSendGlobalDispatchValue = true
    }
    if (this.eventValue?.id && !this.eventValue?.listener && !this.eventValue?.action) {
      this.canReceiveGlobalDispatchValue = true
    }
  }

  canSendGlobalDispatchValueChanged(value, previousValue) {
    if (this.canSendGlobalDispatchValue) {
      if (this.eventValue.listener === 'click') {
        this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `click->${this.identifier}#${this.eventValue.action}`
      }
      if (this.eventValue.listener === 'hover') {
        this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `mouseenter->${this.identifier}#${this.eventValue.action} mouseleave->${this.identifier}#${this.eventValue.action}`
      }
    }
  }

  canReceiveGlobalDispatchValueChanged() {
    if (this.canReceiveGlobalDispatchValue) {
      this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
    }
  }

  globalDispatch({ detail: { event } }) {
    if (this.eventValue.id === event.id && this.element.id !== event.controller.element.id) {
      eval(`this.${event.action}(event)`)
    }
  }

  toggle(event) {
    this.isOpenValue = !this.isOpenValue
    if (this.canSendGlobalDispatchValue) {
      this.dispatch('dispatch', { detail: { event: { ...this.eventValue, controller: this } } })
      event.stopPropagation()
    }
  }

  open(event) {
    this.isOpenValue = true
    if (this.canSendGlobalDispatchValue) {
      this.dispatch('dispatch', { detail: { event: { ...this.eventValue, controller: this } } })
      event.stopPropagation()
    }
  }

  close(event) {
    this.isOpenValue = false
    if (this.canSendGlobalDispatchValue) {
      this.dispatch('dispatch', { detail: { event: { ...this.eventValue, controller: this } } })
      event.stopPropagation()
    }
  }

  isOpenValueChanged(value, previousValue) {
    if (this.isOpenValue) {
      this.element.setAttribute('open', '')
      this.textTarget.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
      this.textTarget.removeAttribute('open')
    }
  }

  translate(event) {
    this.languageNameValue = event.event.value
    if (this.canSendGlobalDispatchValue) {
      this.dispatch('dispatch', { detail: { event: { ...this.eventValue, controller: this } } })
      event.stopPropagation()
    }
  }

  isOpenEditorValueChanged(value, previousValue) {
    if (previousValue === undefined) { return }

    if (this.isOpenEditorValue) {
      this.textTarget.removeAttribute('open')
      this.editorTarget.setAttribute('open', '')
    } else {
      this.labelValue = this.inputTarget.value
      this.editorTarget.removeAttribute('open', '')
      this.textTarget.setAttribute('open', '')
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
