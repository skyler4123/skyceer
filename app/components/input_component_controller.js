import morphdom from "morphdom"
import Cleave from "cleave.js"
import dayjs from "dayjs"
import flatpickr from "flatpickr"
import { Russian } from "flatpickr/dist/l10n/ru.js"
import {  Japanese } from "flatpickr/dist/l10n/ja.js"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", "content", "input"]
  static values = {
    isOpen: { type: Boolean, default: true },
    action: { type: String },
    eventListener: { type: String },
    eventId: { type: String },

    accept: { type: String },
    alt: { type: String },
    autocomplete: { type: String },
    autofocus: { type: String },
    checked: { type: Boolean },
    dirname: { type: String },
    disabled: { type: Boolean },
    form: { type: String },
    formaction: { type: String },
    formenctype: { type: String },
    formmethod: { type: String },
    formnovalidate: { type: String },
    formtarget: { type: String },
    height: { type: String },
    list: { type: String },
    max: { type: String },
    maxlength: { type: String },
    min: { type: String },
    minlength: { type: String },
    multiple: { type: String },
    name: { type: String },
    pattern: { type: String },
    placeholder: { type: String },
    popovertarget: { type: String },
    popovertargetaction: { type: String },
    readonly: { type: Boolean },
    required: { type: Boolean },
    size: { type: String },
    src: { type: String },
    step: { type: String },
    type: { type: String, default: "text" },
    value: { type: String },
    width: { type: String },

    klass: { type: String, default: "" },
    contentClass: { type: String, default: "" },
    inputClass: { type: String, default: "" },
    klassDefault: { type: String, default: "max-w-1/2" },
    contentClassDefault: { type: String, default: "w-full" },
    inputClassDefault: { type: String, default: "w-full h-7" },

    formatOptions: { type: Object }
  }
  initialize() {
    this.initializeID()
    this.initializeHTML()
    this.initializeClass()
    this.initializeFormat()
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
    this.contentTarget.className = this.contentTarget.className + ' ' + this.contentClassDefaultValue + ' ' + this.contentClassValue
    this.inputTarget.className = this.inputTarget.className + ' ' + this.inputClassDefaultValue + ' ' + this.inputClassValue
  }

  initializeFormat() {
    const timeTypes = ['date', 'datetime-local', 'month', 'time', 'week']
    if (timeTypes.includes(this.typeValue)) {
      flatpickr.l10ns.default.firstDayOfWeek = 1
      flatpickr(this.inputTarget, this.formatOptionsValue)
      return
    }
    var cleave = new Cleave(this.inputTarget, this.formatOptionsValue);
  }

  templateHTML() {
    if (this.templateTarget.content.childElementCount === 0) {
      return this.labelValue
    } else {
      return this.templateTarget.innerHTML
    }
  }
  
  initHTML() {
    return `
      <input
        ${this.acceptValue ? `accept="${this.acceptValue}"` : ""}
        ${this.altValue ? `alt="${this.altValue}"` : ""}
        ${this.autocompleteValue ? `autocomplete="${this.autocompleteValue}"` : ""}
        ${this.autofocusValue ? `autofocus="${this.autofocusValue}"` : ""}
        ${this.checkedValue ? `checked` : ""}
        ${this.dirnameValue ? `dirname="${this.dirnameValue}"` : ""}
        ${this.disabledValue ? `disabled` : ""}
        ${this.formValue ? `form="${this.formValue}"` : ""}
        ${this.formactionValue ? `formaction="${this.formactionValue}"` : ""}
        ${this.formenctypeValue ? `formenctype="${this.formenctypeValue}"` : ""}
        ${this.formmethodValue ? `formmethod="${this.formmethodValue}"` : ""}
        ${this.formnovalidateValue ? `formnovalidate="${this.formnovalidateValue}"` : ""}
        ${this.formtargetValue ? `formtarget="${this.formtargetValue}"` : ""}
        ${this.heightValue ? `height="${this.heightValue}"` : ""}
        ${this.listValue ? `list="${this.listValue}"` : ""}
        ${this.maxValue ? `max="${this.maxValue}"` : ""}
        ${this.maxlengthValue ? `maxlength="${this.maxlengthValue}"` : ""}
        ${this.minValue ? `min="${this.minValue}"` : ""}
        ${this.minlengthValue ? `minlength="${this.minlengthValue}"` : ""}
        ${this.multipleValue ? `multiple="${this.multipleValue}"` : ""}
        ${this.nameValue ? `name="${this.nameValue}"` : ""}
        ${this.patternValue ? `pattern="${this.patternValue}"` : ""}
        ${this.placeholderValue ? `placeholder="${this.placeholderValue}"` : ""}
        ${this.popovertargetValue ? `popovertarget="${this.popovertargetValue}"` : ""}
        ${this.popovertargetactionValue ? `popovertargetaction="${this.popovertargetactionValue}"` : ""}
        ${this.readonlyValue ? `readonly` : ""}
        ${this.requiredValue ? `required` : ""}
        ${this.sizeValue ? `size="${this.sizeValue}"` : ""}
        ${this.srcValue ? `src="${this.srcValue}"` : ""}
        ${this.stepValue ? `step="${this.stepValue}"` : ""}
        ${this.typeValue ? `type="${this.typeValue}"` : ""}
        ${this.valueValue ? `value="${this.valueValue}"` : ""}
        ${this.widthValue ? `width="${this.widthValue}"` : ""}

        data-${this.identifier}-target="input"
      >
    `
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

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
