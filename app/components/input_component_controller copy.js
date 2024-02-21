import morphdom from "morphdom"
import Cleave from "cleave.js"
import dayjs from "dayjs"
import flatpickr from "flatpickr"
import { Russian } from "flatpickr/dist/l10n/ru.js"
import {  Japanese } from "flatpickr/dist/l10n/ja.js"
import { useHover, useClickOutside } from 'stimulus-use'
import ApplicationComponentController from './application_component_controller';

export default class InputComponentController extends ApplicationComponentController {
  static values = {
    ...super.values,
    isRememberMe: { type: Boolean },
    input: { type: String }
  }

  initialize() {
    super.initialize()
    this.initializeHTML()
    this.initializeClass()
    this.initializeFormat()
    this.initializeAction()

    this.initializeComplete()
  }

  initializeHTML() {
    this.element.innerHTML = this.initHTML
  }

  initializeClass() {
    if (this.hasLabelTaget) {
      this.labelTarget.className = this.twMerge(this.labelTarget.className, this.labelClass)
    }
    if (this.hasInputTarget) {
      this.inputTarget.className = this.twMerge(this.inputTarget.className, this.inputClass)
    }
    if (this.isFloatingLabel && this.hasLabelTaget) {
      this.element.className = this.twMerge('relative', this.element.className)
      this.labelTarget.className = this.twMerge('absolute left-0 top-1/2 -translate-y-1/2 translate-x-2 open:top-0 duration-200 ease-out bg-white', this.labelTarget.className )
    }
    if (this.type === "comparison") {
      this.element.className = this.twMerge(this.element.className , this.typeClass.comparison.klass)
      this.inputTarget.className = this.twMerge(this.inputTarget.className, this.typeClass.comparison.inputClass)
    }
    this.element.className = this.twMerge(this.element.className , this.klass)
  }

  initializeFormat() {
    if (!this.formatOptions) { return }

    const timeTypes = ['date', 'datetime-local', 'month', 'time', 'week']
    if (timeTypes.includes(this.type)) {
      flatpickr.l10ns.default.firstDayOfWeek = 1
      flatpickr(this.inputTarget, this.formatOptions)
      return
    }
    if (this.hasInputTarget) {
      var cleave = new Cleave(this.inputTarget, this.formatOptions);
      return
    }
  }
  
  initializeAction() {
    if (this.eventId) {
      this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
    }
    if (this.isFloatingLabel) {
      this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `click->${this.identifier}#focus`
    }
  }

  isOpenValueChanged(value, previousValue) {
    super.isOpenValueChanged(value, previousValue)
    if (this.isOpenValue) {
      if (this.hasLabelTaget) {
        this.labelTarget.setAttribute('open', '')
      }
      this.inputTarget.setAttribute('open', '')
    } else {
      if (this.hasLabelTaget) {
        this.labelTarget.removeAttribute('open')
      }
      if (this.hasInputTarget) {
        this.inputTarget.removeAttribute('open')
      }
    }
  }

  input() {
    this.inputValue = this.inputTarget.value
  }

  inputValueChanged(value, previousValue) {
    this.inputTarget.value = this.inputValue
  }

  focus() {
    this.isFocusValue = true
    this.element.dataset.action = this.element.dataset.action + ' ' + `${this.identifier}:click:outside->${this.identifier}#focusOut`
    this.element.dataset.action = this.element.dataset.action.replace(`click->${this.identifier}#focus`, '')
  }

  focusOut() {
    this.isFocusValue = false
    this.element.dataset.action = (this.element.dataset.action || '') + ' ' + `click->${this.identifier}#focus`
    this.element.dataset.action = this.element.dataset.action.replace(`${this.identifier}:click:outside->${this.identifier}#focusOut`, '')
  }

  isFocusValueChanged(value, previousValue) {
    if (this.isFocusValue) {
      if (this.label) {
        this.labelTarget.setAttribute('open', '')
      }
      if (this.hasInputTarget) {
        this.inputTarget.setAttribute('open', '')
      }
    } else {
      if (this.label && this.hasInputTarget && !this.inputTarget.value) {
        this.labelTarget.removeAttribute('open')
      }
      if (this.hasInputTarget) {
        this.inputTarget.removeAttribute('open')
      }
    }
  }

  toggleRememberMe() {
    this.isRememberMeValue = !this.isRememberMeValue
  }

  rememberMe() {
    this.isRememberMeValue = true
  }

  forgetMe() {
    this.isRememberMeValue = false
  }
  
  saveToLocal() {
    const remmemberMeData = { ...this.localData, [this.name]: this.currentValue }
    localStorage.setItem(this.rememberMeName, JSON.stringify(remmemberMeData))
  }

  clearLocal() {
    localStorage.setItem(this.rememberMeName, '')
  }

  syncFromLocal() {
    this.currentValue = this.localData[this.name] || ''
  }

  isRememberMeValueChanged(value, previousValue) {
    if (previousValue === undefined) { return }

    if (this.isRememberMeValue) {
      this.inputTarget.dataset.action = (this.inputTarget.dataset.action || '') + ' ' + this.actionToSaveToLocal
      if (!this.isInitializedSyncFromLocal) {
        this.syncFromLocal()
        this.initializedSyncFromLocal = true
      } else {
        this.saveToLocal()
      }
    } else {
      this.inputTarget.dataset.action = this.inputTarget.dataset.action?.replace(this.actionToSaveToLocal, '')
      this.clearLocal()    
    }
  }

  get typeClass() {
    return {
      comparison: {
        klass: 'absolute inset-0 w-[1536px] h-[854px]',
        inputClass: 'absolute w-full h-full appearance-none bg-inherit [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-1 [&::-webkit-slider-thumb]:h-[854px] [&::-webkit-slider-thumb]:hover:cursor-ew-resize'
      }
    }
  }
  get initHTML() {
    if (this.type === 'comparison') {
      return `
        <input data-${this.identifier}-target="input" type="range" min="0" max="100" value="50">
      `
    }
    return `
        ${this.label ? `<label data-${this.identifier}-target="label">${this.label}</label>` : ''}
        <input
          ${this.accept ? `accept="${this.accept}"` : ""}
          ${this.alt ? `alt="${this.alt}"` : ""}
          ${this.autocomplete ? `autocomplete="${this.autocomplete}"` : ""}
          ${this.autofocus ? `autofocus="${this.autofocus}"` : ""}
          ${this.checked ? `checked` : ""}
          ${this.dirname ? `dirname="${this.dirname}"` : ""}
          ${this.disabled ? `disabled` : ""}
          ${this.form ? `form="${this.form}"` : ""}
          ${this.formeventAction ? `formaction="${this.formeventAction}"` : ""}
          ${this.formenctype ? `formenctype="${this.formenctype}"` : ""}
          ${this.formmethod ? `formmethod="${this.formmethod}"` : ""}
          ${this.formnovalidate ? `formnovalidate="${this.formnovalidate}"` : ""}
          ${this.formtarget ? `formtarget="${this.formtarget}"` : ""}
          ${this.height ? `height="${this.height}"` : ""}
          ${this.list ? `list="${this.list}"` : ""}
          ${this.max ? `max="${this.max}"` : ""}
          ${this.maxlength ? `maxlength="${this.maxlength}"` : ""}
          ${this.min ? `min="${this.min}"` : ""}
          ${this.minlength ? `minlength="${this.minlength}"` : ""}
          ${this.multiple ? `multiple="${this.multiple}"` : ""}
          ${this.name ? `name="${this.name}"` : ""}
          ${this.pattern ? `pattern="${this.pattern}"` : ""}
          ${this.placeholder ? `placeholder="${this.placeholder}"` : ""}
          ${this.popovertarget ? `popovertarget="${this.popovertarget}"` : ""}
          ${this.popovertargeteventAction ? `popovertargetaction="${this.popovertargeteventAction}"` : ""}
          ${this.readonly ? `readonly` : ""}
          ${this.required ? `required` : ""}
          ${this.size ? `size="${this.size}"` : ""}
          ${this.src ? `src="${this.src}"` : ""}
          ${this.step ? `step="${this.step}"` : ""}
          ${this.type ? `type="${this.type}"` : ""}
          ${this.value ? `value="${this.value}"` : ""}
          ${this.width ? `width="${this.width}"` : ""}

          data-${this.identifier}-target="input"
        >
    `
  }

  get labelClass() {
    return this.optionsValue.labelClass
  }
  get inputClass() {
    return this.optionsValue.inputClass
  }
  get optionClass() {
    return this.optionsValue.optionClass
  }
  get label() {
    return this.optionsValue.label
  }
  get isFloatingLabel() {
    return this.optionsValue.isFloatingLabel
  }
  get formatOptions() {
    return this.optionsValue.formatOptions
  }
  get isAutoSubmit() {
    return this.optionsValue.isAutoSubmit
  }
  get autoSubmitUrl() {
    return this.optionsValue.autoSubmitUrl
  }
  get payloadAutoSubmit() {
    return this.optionsValue.payloadAutoSubmit
  }
  get httpMethodAutoSubmit() {
    return this.optionsValue.httpMethodAutoSubmit
  }
  get setTimeoutAutoSubmit() {
    return this.optionsValue.setTimeoutAutoSubmit
  }
  get setTimeoutAutoSubmitId() {
    return this.optionsValue.setTimeoutAutoSubmitId
  }
  get rememberMeName() {
    return this.optionsValue.rememberMeName || 'rememberMe'
  }
  get localData() {
    return JSON.parse(localStorage.getItem(this.rememberMeName) || '{}')
  }
  get currentValue() {
    return this.inputTarget.value
  }
  set currentValue(value) {
    this.inputTarget.value = value
  }
  get actionToSaveToLocal() {
    return `input->${this.identifier}#saveToLocal`
  }
  get isInitializedSyncFromLocal() {
    return this.initializedSyncFromLocal
  }
  set isInitializedSyncFromLocal(value) {
    this.initializedSyncFromLocal = value
  }







  // Attributes or input
  get accept() {
    return this.optionsValue.accept
  }
  get alt() {
    return this.optionsValue.alt
  }
  get autocomplete() {
    return this.optionsValue.autocomplete
  }
  get autofocus() {
    return this.optionsValue.autofocus
  }
  get checked() {
    return this.optionsValue.checked
  }
  get dirname() {
    return this.optionsValue.dirname
  }
  get disabled() {
    return this.optionsValue.disabled
  }
  get form() {
    return this.optionsValue.form
  }
  get formaction() {
    return this.optionsValue.formaction
  }
  get formenctype() {
    return this.optionsValue.formenctype
  }
  get formmethod() {
    return this.optionsValue.formmethod
  }
  get formnovalidate() {
    return this.optionsValue.formnovalidate
  }
  get formtarget() {
    return this.optionsValue.formtarget
  }
  get height() {
    return this.optionsValue.height
  }
  get list() {
    return this.optionsValue.list
  }
  get max() {
    return this.optionsValue.max
  }
  get maxlength() {
    return this.optionsValue.maxlength
  }
  get min() {
    return this.optionsValue.min
  }
  get minlength() {
    return this.optionsValue.minlength
  }
  get multiple() {
    return this.optionsValue.multiple
  }
  get name() {
    return this.optionsValue.name
  }
  get pattern() {
    return this.optionsValue.pattern
  }
  get placeholder() {
    return this.optionsValue.placeholder
  }
  get popovertarget() {
    return this.optionsValue.popovertarget
  }
  get popovertargetaction() {
    return this.optionsValue.popovertargetaction
  }
  get readonly() {
    return this.optionsValue.readonly
  }
  get required() {
    return this.optionsValue.required
  }
  get size() {
    return this.optionsValue.size
  }
  get src() {
    return this.optionsValue.src
  }
  get step() {
    return this.optionsValue.step
  }
  get type() {
    return this.optionsValue.type
  }
  get value() {
    return this.optionsValue.value
  }
  get width() {
    return this.optionsValue.width
  }



}
