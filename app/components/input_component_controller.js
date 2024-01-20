import morphdom from "morphdom"
import Cleave from "cleave.js"
import dayjs from "dayjs"
import flatpickr from "flatpickr"
import { Russian } from "flatpickr/dist/l10n/ru.js"
import {  Japanese } from "flatpickr/dist/l10n/ja.js"
import { useHover, useClickOutside } from 'stimulus-use'
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template", "content", "label", "input", "select", "option"]
  static values = {
    isOpen: { type: Boolean, default: true },
    event: { type: Object },
    canSendGlobalDispatch: { type: Boolean, default: false },
    canReceiveGlobalDispatch: { type: Boolean, default: false },
    isFocus: { type: Boolean, default: false },

    isAutoSubmit: { type: Boolean, default: true },
    autoSubmitUrl: { type: String },
    payload: { type: String },
    httpMethod: { type: String, default: 'get' },
    setTimeoutTime: { type: Number, default: 5000 },
    setTimeoutId: { type: Number },


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
    labelClass: { type: String, default: "" },
    inputClass: { type: String, default: "" },
    selectClass: { type: String, default: "" },
    optionClass: { type: String, default: "" },
    klassDefault: { type: String, default: "" },
    contentClassDefault: { type: String, default: "" },
    labelClassDefault: { type: String, default: "" },
    inputClassDefault: { type: String, default: "" },
    selectClassDefault: { type: String, default: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" },
    optionClassDefault: { type: String, default: "" },

    label: { type: String },
    isFloatingLabel: { type: Boolean, default: false },
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
    if (this.labelValue) {
      this.labelTarget.className = this.labelTarget.className + ' ' + this.labelClassDefaultValue + ' ' + this.labelClassValue
    }
    if (this.hasInputTarget) {
      this.inputTarget.className = this.inputTarget.className + ' ' + this.inputClassDefaultValue + ' ' + this.inputClassValue
    }
    if (this.hasSelectTarget) {
      this.selectTarget.className = this.selectTarget.className + ' ' + this.selectClassDefaultValue + ' ' + this.selectClassValue
    }
    if (this.hasOptionTarget) {
      this.optionTargets.forEach((target) => {
        target.className = target.className + ' ' + this.optionClassDefaultValue + ' ' + this.optionClassValue
      })
    }
    if (this.labelValue && this.isFloatingLabelValue) {
      this.contentTarget.className = this.contentTarget.className + ' ' + 'relative'
      this.labelTarget.className = this.labelTarget.className + ' ' + 'absolute left-0 top-1/2 -translate-y-1/2 translate-x-2 open:top-0 duration-200 ease-out bg-white'
    }
  }

  initializeFormat() {
    const timeTypes = ['date', 'datetime-local', 'month', 'time', 'week']
    if (timeTypes.includes(this.typeValue)) {
      flatpickr.l10ns.default.firstDayOfWeek = 1
      flatpickr(this.inputTarget, this.formatOptionsValue)
      return
    }
    if (this.hasInputTarget) {
      var cleave = new Cleave(this.inputTarget, this.formatOptionsValue);
    }
  }

  templateHTML() {
    if (this.templateTarget.content?.childElementCount === 0) {
      return this.labelValue
    } else {
      return this.templateTarget.innerHTML
    }
  }
  
  initHTML() {
    if (this.typeValue === 'select') {
      return `
        <div data-${this.identifier}-target="content">
          ${this.labelValue ? `<label data-${this.identifier}-target="label">${this.labelValue}</label>` : ''}
          <select data-${this.identifier}-target="select" name="${this.nameValue}">
            ${this.templateHTML()}
          </select>
        </div
      `
    }
    return `
      <div data-${this.identifier}-target="content">
        ${this.labelValue ? `<label data-${this.identifier}-target="label">${this.labelValue}</label>` : ''}
        <input
          ${this.acceptValue ? `accept="${this.acceptValue}"` : ""}
          ${this.altValue ? `alt="${this.altValue}"` : ""}
          ${this.autocompleteValue ? `autocomplete="${this.autocompleteValue}"` : ""}
          ${this.autofocusValue ? `autofocus="${this.autofocusValue}"` : ""}
          ${this.checkedValue ? `checked` : ""}
          ${this.dirnameValue ? `dirname="${this.dirnameValue}"` : ""}
          ${this.disabledValue ? `disabled` : ""}
          ${this.formValue ? `form="${this.formValue}"` : ""}
          ${this.formeventActionValue ? `formaction="${this.formeventActionValue}"` : ""}
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
          ${this.popovertargeteventActionValue ? `popovertargetaction="${this.popovertargeteventActionValue}"` : ""}
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
      </div>
    `
  }

  initializeAction() {
    if (this.eventValue?.id && this.eventValue?.listener && this.eventValue?.action) {
      this.canSendGlobalDispatchValue = true
    }
    if (this.eventValue?.id && !this.eventValue?.listener && !this.eventValue?.action) {
      this.canReceiveGlobalDispatchValue = true
    }
    if (this.isFloatingLabelValue) {
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `click->${this.identifier}#focus`
    }
    if (this.eventValue.action === 'remember') {
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `${this.eventValue.listener}->${this.identifier}#${this.eventValue.action}`
    }
  }

  canSendGlobalDispatchValueChanged(value, previousValue) {
    if (this.canSendGlobalDispatchValue) {
      if (this.eventValue.listener === 'click') {
        this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `${this.eventValue.listener}->${this.identifier}#${this.eventValue.action}`
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
    } else {
      this.element.removeAttribute('open')
    }
  }

  focus() {
    this.isFocusValue = true
    this.element.dataset.action = this.element.dataset.action + ' ' + `${this.identifier}:click:outside->${this.identifier}#focusOut`
  }

  focusOut() {
    this.isFocusValue = false
    this.element.dataset.action = this.element.dataset.action.replace(`${this.identifier}:click:outside->${this.identifier}#focusOut`, '')
  }

  isFocusValueChanged(value, previousValue) {
    if (this.isFocusValue) {
      if (this.labelValue) {
        this.labelTarget.setAttribute('open', '')
      }
      if (this.hasInputTarget) {
        this.inputTarget.setAttribute('open', '')
      }
    } else {
      if (this.labelValue && this.hasInputTarget && !this.inputTarget.value) {
        this.labelTarget.removeAttribute('open')
      }
      if (this.hasInputTarget) {
        this.inputTarget.removeAttribute('open')
      }
    }
  }

  input(event) {
    console.log(event)
    if (this.isAutoSubmitValue) {
      clearTimeout(this.setTimeoutIdValue)
      let timeoutId = setTimeout(() => {

        console.log('Auto submit is on!')
      }, this.setTimeoutTimeValue)
      this.setTimeoutIdValue = timeoutId
    }
  }

  remember(event) {
    if (this.canSendGlobalDispatchValue) {
      this.dispatch('dispatch', { detail: { event: { ...this.eventValue, controller: this } } })
      event.stopPropagation()
    }
  }

  enter() {
    console.log('Enter is listened')
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
    useClickOutside(this)
  }

  // clickOutside(event) {
  //   // example to close a modal
  //   console.log("click outside")
  // }
}
