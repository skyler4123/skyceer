import morphdom from "morphdom"
import Cleave from "cleave.js"
import dayjs from "dayjs"
import flatpickr from "flatpickr"
import { Russian } from "flatpickr/dist/l10n/ru.js"
import {  Japanese } from "flatpickr/dist/l10n/ja.js"
import { useHover, useClickOutside } from 'stimulus-use'
import ApplicationController from "../javascript/controllers/application_controller";

export default class InputController extends ApplicationController {
  static values = {
    ...super.values,
    isRememberMe: { type: Boolean },
    input: { type: String }
  }

  initialize() {
    super.initialize()
    this.initializeHTML()
    this.initializeFormat()
    this.initializeComplete()
  }

  initializeHTML() {
    if (typeof this.accept !== 'undefined') { this.element.setAttribute('accept', this.accept) }
    if (typeof this.alt !== 'undefined') { this.element.setAttribute('alt', this.alt) }
    if (typeof this.autocomplete !== 'undefined') { this.element.setAttribute('autocomplete', this.autocomplete) }
    if (typeof this.autofocus !== 'undefined') { this.element.setAttribute('autofocus', this.autofocus) }
    if (typeof this.checked !== 'undefined') { this.element.setAttribute('checked', this.checked) }
    if (typeof this.dirname !== 'undefined') { this.element.setAttribute('dirname', this.dirname) }
    if (typeof this.disabled !== 'undefined') { this.element.setAttribute('disabled', this.disabled) }
    if (typeof this.form !== 'undefined') { this.element.setAttribute('form', this.form) }
    if (typeof this.formeventAction !== 'undefined') { this.element.setAttribute('formeventAction', this.formeventAction) }
    if (typeof this.formenctype !== 'undefined') { this.element.setAttribute('formenctype', this.formenctype) }
    if (typeof this.formmethod !== 'undefined') { this.element.setAttribute('formmethod', this.formmethod) }
    if (typeof this.formnovalidate !== 'undefined') { this.element.setAttribute('formnovalidate', this.formnovalidate) }
    if (typeof this.formtarget !== 'undefined') { this.element.setAttribute('formtarget', this.formtarget) }
    if (typeof this.height !== 'undefined') { this.element.setAttribute('height', this.height) }
    if (typeof this.list !== 'undefined') { this.element.setAttribute('list', this.list) }
    if (typeof this.max !== 'undefined') { this.element.setAttribute('max', this.max) }
    if (typeof this.maxlength !== 'undefined') { this.element.setAttribute('maxlength', this.maxlength) }
    if (typeof this.min !== 'undefined') { this.element.setAttribute('min', this.min) }
    if (typeof this.minlength !== 'undefined') { this.element.setAttribute('minlength', this.minlength) }
    if (typeof this.multiple !== 'undefined') { this.element.setAttribute('multiple', this.multiple) }
    if (typeof this.name !== 'undefined') { this.element.setAttribute('name', this.name) }
    if (typeof this.pattern !== 'undefined') { this.element.setAttribute('pattern', this.pattern) }
    if (typeof this.placeholder !== 'undefined') { this.element.setAttribute('placeholder', this.placeholder) }
    if (typeof this.popovertarget !== 'undefined') { this.element.setAttribute('popovertarget', this.popovertarget) }
    if (typeof this.popovertargeteventAction !== 'undefined') { this.element.setAttribute('popovertargeteventAction', this.popovertargeteventAction) }
    if (typeof this.readonly !== 'undefined') { this.element.setAttribute('readonly', this.readonly) }
    if (typeof this.required !== 'undefined') { this.element.setAttribute('required', this.required) }
    if (typeof this.size !== 'undefined') { this.element.setAttribute('size', this.size) }
    if (typeof this.src !== 'undefined') { this.element.setAttribute('src', this.src) }
    if (typeof this.step !== 'undefined') { this.element.setAttribute('step', this.step) }
    if (typeof this.type !== 'undefined') { this.element.setAttribute('type', this.type) }
    if (typeof this.value !== 'undefined') { this.element.setAttribute('value', this.value) }
    if (typeof this.width !== 'undefined') { this.element.setAttribute('width', this.width) }

    if (this.type === 'comparison') { this.element.setAttribute('type', 'range') }
  }

  initializeFormat() {
    if (!this.formatOptions) { return }

    const timeTypes = ['date', 'datetime-local', 'month', 'time', 'week']
    if (timeTypes.includes(this.type)) {
      flatpickr.l10ns.default.firstDayOfWeek = 1
      flatpickr(this.element, this.formatOptions)
      return
    }
    var cleave = new Cleave(this.element, this.formatOptions);
  }
  
  initializeAction() {
    super.initializeAction()
    this.addAction(this.element, `input->${this.identifier}#input`)
  }

  input() {
    this.inputValue = this.element.value
  }

  inputValueChanged(value, previousValue) {
    this.element.value = this.inputValue
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
      this.element.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
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
      this.addAction(this.element, this.actionToSaveToLocal)
      if (!this.isInitializedSyncFromLocal) {
        this.syncFromLocal()
        this.initializedSyncFromLocal = true
      } else {
        this.saveToLocal()
      }
    } else {
      this.removeAction(this.element, this.actionToSaveToLocal)
      this.clearLocal()    
    }
  }
  // get variant() {
  //   return this.paramsValue.variant || 'default'
  // }
  // get variantClass() {
  //   return {
  //     default: {
  //       element: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
  //     }
  //   }
  // }
  get typeClass() {
    return {
      text: {
        element: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      },
      comparison: {
        element: 'absolute inset-0 w-full h-full appearance-none bg-inherit [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-1 [&::-webkit-slider-thumb]:h-[854px] [&::-webkit-slider-thumb]:hover:cursor-ew-resize',

      }
    }
  }
  get formatOptions() {
    return this.paramsValue.formatOptions
  }
  get isAutoSubmit() {
    return this.paramsValue.isAutoSubmit
  }
  get autoSubmitUrl() {
    return this.paramsValue.autoSubmitUrl
  }
  get payloadAutoSubmit() {
    return this.paramsValue.payloadAutoSubmit
  }
  get httpMethodAutoSubmit() {
    return this.paramsValue.httpMethodAutoSubmit
  }
  get setTimeoutAutoSubmit() {
    return this.paramsValue.setTimeoutAutoSubmit
  }
  get setTimeoutAutoSubmitId() {
    return this.paramsValue.setTimeoutAutoSubmitId
  }
  get rememberMeName() {
    return this.paramsValue.rememberMeName || 'rememberMe'
  }
  get localData() {
    return JSON.parse(localStorage.getItem(this.rememberMeName) || '{}')
  }
  get currentValue() {
    return this.element.value
  }
  set currentValue(value) {
    this.element.value = value
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
    return this.paramsValue.accept
  }
  get alt() {
    return this.paramsValue.alt
  }
  get autocomplete() {
    return this.paramsValue.autocomplete
  }
  get autofocus() {
    return this.paramsValue.autofocus
  }
  get checked() {
    return this.paramsValue.checked
  }
  get dirname() {
    return this.paramsValue.dirname
  }
  get disabled() {
    return this.paramsValue.disabled
  }
  get form() {
    return this.paramsValue.form
  }
  get formaction() {
    return this.paramsValue.formaction
  }
  get formenctype() {
    return this.paramsValue.formenctype
  }
  get formmethod() {
    return this.paramsValue.formmethod
  }
  get formnovalidate() {
    return this.paramsValue.formnovalidate
  }
  get formtarget() {
    return this.paramsValue.formtarget
  }
  get height() {
    return this.paramsValue.height
  }
  get list() {
    return this.paramsValue.list
  }
  get max() {
    return this.paramsValue.max
  }
  get maxlength() {
    return this.paramsValue.maxlength
  }
  get min() {
    return this.paramsValue.min
  }
  get minlength() {
    return this.paramsValue.minlength
  }
  get multiple() {
    return this.paramsValue.multiple
  }
  get name() {
    return this.paramsValue.name
  }
  get pattern() {
    return this.paramsValue.pattern
  }
  get placeholder() {
    return this.paramsValue.placeholder
  }
  get popovertarget() {
    return this.paramsValue.popovertarget
  }
  get popovertargetaction() {
    return this.paramsValue.popovertargetaction
  }
  get readonly() {
    return this.paramsValue.readonly
  }
  get required() {
    return this.paramsValue.required
  }
  get size() {
    return this.paramsValue.size
  }
  get src() {
    return this.paramsValue.src
  }
  get step() {
    return this.paramsValue.step
  }
  get type() {
    return this.paramsValue.type || 'text'
  }
  get value() {
    return this.paramsValue.value
  }
  get width() {
    return this.paramsValue.width
  }



}
