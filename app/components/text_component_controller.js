import { twMerge } from 'tailwind-merge'
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["text", "editor", "input"]
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean, default: false },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
    label: { type: String },
    isOpenEditor: { type: Boolean, default: false },
    language: { type: String }
  }

  initialize() {
    this.initializeCamelCase()
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
    this.labelValue = this.optionsValue.label
    this.languageValue = this.optionsValue.language || "english"
  }

  initializeHTML() {
    this.textTarget.innerText = this.labelValue
    this.textTarget.setAttribute('open', '')
  }

  initializeTarget() {
    if (this.hasEditorTarget) {
      this.editorTarget.querySelector('input').setAttribute(`data-${this.identifier}-target`, 'input')
    }
  }

  initializeClass() {
    this.element.className = twMerge(this.element.className, this.klass)
    this.textTarget.className = twMerge('hidden open:flex', this.textTarget.className, this.textClass)
    if (this.hasEditorTarget) {
      this.editorTarget.className = twMerge('hidden open:flex', this.editorTarget.className, this.editorClass)
      this.inputTarget.className = twMerge(this.inputTarget.className, this.inputClass)
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
    
    this.labelValue = this.dictionary[this.languageKey][this.languageValue]
  }

  translate(event) {
    this.languageValue = event.value
  }

  openEditor() {
    this.isOpenEditorValue = true
  }

  closeEditor() {
    this.isOpenEditorValue = false
  }

  isOpenEditorValueChanged(value, previousValue) {
    if (previousValue === undefined || previousValue === '') { return }

    if (this.isOpenEditorValue) {
      this.inputTarget.value = this.labelValue
      this.textTarget.removeAttribute('open')
      this.editorTarget.setAttribute('open', '')
    } else {
      this.labelValue = this.inputTarget.value
      this.editorTarget.removeAttribute('open', '')
      this.textTarget.setAttribute('open', '')
    }
  }

  increase(event) {
    this.labelValue = Number(this.labelValue) + Number(event.value)
  }

  decrease(event) {
    this.labelValue = Number(this.labelValue) - Number(event.value)
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
  get inputClass() {
    return this.optionsValue.inputClass
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
  get dictionary() {
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

  initializeCamelCase() {
    let options = this.optionsValue
    options = Object.keys(options).reduce((result, key) => ({
      ...result,
      [this.camalize(key)]: options[key]
    }), {})
    if (options.actions) {
      options.actions = options.actions.map((action) => {
        return Object.keys(action).reduce((result, key) => ({
          ...result,
          [this.camalize(key)]: this.camalize(action[key])
        }), {})
      })
    }
    if (options.events) {
      options.events = options.events.map((event) => {
        return Object.keys(event).reduce((result, key) => {
          if (key === 'id') {
            return {
              ...result,
              [this.camalize(key)]: event[key]
            }
          }
          return {
            ...result,
            [this.camalize(key)]: this.camalize(event[key])
          }
        }, {})
      })
    }
    if (options.position) {
      options.position = this.camalize(options.position)
    }
    this.optionsValue = options
  }
  camalize(str) {
    if (typeof str === 'string' || str instanceof String) {
      return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    } else {
      return str
    }
  }
}
