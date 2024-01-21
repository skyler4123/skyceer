import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["checkbox"]
  static values = {
    isOpen: { type: Boolean, default: true },
    event: { type: Object, default: { id: 'remember_me' } },
    canSendGlobalDispatch: { type: Boolean, default: false },
    canReceiveGlobalDispatch: { type: Boolean, default: false },
    isChecked: { type: Boolean },
    localStorageName: { type: String, default: "remember_me" },

    klass: { type: String, default: "" },
    contentClass: { type: String, default: "" },
    backgroundClass: { type: String, default: "rounded-full bg-gray-200" },
    percentageClass: { type: String, default: "bg-blue-600 dark:bg-gray-700 text-xs font-medium text-blue-100 rounded-full" },
    klassDefault: { type: String, default: "w-1/3" },
    contentClassDefault: { type: String, default: "w-full" },
    backgroundClassDefault: { type: String, default: "w-full" },
    percentageClassDefault: { type: String, default: "text-center p-0.5 leading-none duration-500 ease-out" },
  }

  initialize() {
    this.initializeID()
    this.initializeAction()
    this.initializeClass()

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

  initializeClass() {
    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
  }

  initializeAction() {
    this.checkboxTarget.dataset.action = this.checkboxTarget.dataset.action + ' ' + `change->${this.identifier}#checkbox`
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

  checkbox() {
    this.isCheckedValue =  this.checkboxTarget.checked
  }

  isCheckedValueChanged(value, previousValue) {
    if (previousValue === undefined || previousValue === '') {
      setTimeout(() => {
        this.syncFromLocalStorage()
      }, 500)
      return
    }

    if (this.isCheckedValue) {
      this.remember()
    } else {
      this.forget()
    }
  }

  remember() {
    let inputData = {}
    Array.from(this.inputs()).forEach((input) => {
      inputData = { ...inputData, [input.name]: (input.type === 'checkbox' ? input.checked : input.value) }
    })
    localStorage.setItem(this.localStorageNameValue, JSON.stringify(inputData))
  }

  syncFromLocalStorage() {
    const localStorageData = JSON.parse(localStorage.getItem(this.localStorageNameValue))
    const keys = Object.keys(localStorageData)
    Array.from(this.inputs()).forEach((input) => {
      if (keys.includes(input.name)) {
        if (input.type === 'checkbox') {
          input.checked = localStorageData[input.name]
        } else {
          return
        }
        input.value = localStorageData[input.name]
      }
    })
  }

  forget() {
    localStorage.setItem(this.localStorageNameValue, `{"${this.localStorageNameValue}": false}`)
  }

  inputs() {
    return document.querySelectorAll('input')
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
}
