import { twMerge } from 'tailwind-merge'
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["text", "editor"]
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean, default: false },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
    label: { type: String },
    isOpenEditor: { type: Boolean },
    language: { type: String }
  }

  initialize() {
    this.initializeID()
    this.initializeValue()
    this.initializeHTML()
    // this.initializeClass()
    // this.initializeAction()

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
  get textClass() {
    return this.optionsValue.textClass
  }
  get editorClass() {
    return this.optionsValue.editorClass
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
  get languageKey() {
    return this.optionsValue.languageKey || this.labelValue
  }

  initializeValue() {
    this.labelValue = this.optionsValue.label
    this.languageValue = this.optionsValue.language || "english"
  }

  initializeHTML() {
    this.textTarget.innerText = this.labelValue
  }

  initializeClass() {
    this.element.className = twMerge(this.element.className, this.klass)
    this.textTarget.className = twMerge(this.textTarget.className, this.textClass)
    if (this.hasEditorTarget) {
      this.editorTarget.className = twMerge(this.editorTarget.className, this.editorClass)
    }
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

  labelValueChanged(value, previousValue) {
    if (previousValue === undefined || previousValue === '') { return }

    this.textTarget.innerHTML = this.labelValue
  }

  languageValueChanged(value, previousValue) {
    if (previousValue === undefined || previousValue === '') { return }
    
    this.labelValue = this.dictionary()[this.languageKey][this.languageValue]
  }

  translate(event) {
    this.languageNameValue = event.value
    if (this.canSendGlobalDispatchValue) {
      this.dispatch('dispatch', { detail: { event: { ...this.eventValue, controller: this } } })
      event.stopPropagation()
    }
  }

  isOpenEditorValueChanged(value, previousValue) {
    if (previousValue === undefined || previousValue === '') { return }

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
      'Price': {
        'english': 'Price',
        'vietnam': 'Gia ca'
      },
      'Car': {
        'english': 'Car',
        'vietnam': 'Xe hoi'
      },
      'Teacher': {
        'english': 'Teacher',
        'vietnam': 'Giao Vien'
      }
    }
  }
}
