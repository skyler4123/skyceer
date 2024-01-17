import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["content"]
  static values = {
    isOpen: { type: Boolean, default: true },
    event: { type: Object },
    canSendGlobalDispatch: { type: Boolean, default: false },
    canReceiveGlobalDispatch: { type: Boolean, default: false },

    style: { type: Object }, // { name: "badge"/"alert/"position", border: "pill", color: "blue" }
    position: { type: String },

    klass: { type: String, default: "" },
    klassDefault: { type: String, default: "flex" },
    contentClass: { type: String, default: "" },
    contentClassDefault: { type: String, default: "flex" }
  }

  initialize() {
    this.initializeID()
    this.initializeClass()
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

  initializeClass() {
    if (this.styleValue.name) {
      this.klassDefaultValue = this.klassDefaultValue + ' ' + this.klassDefault()[this.styleValue.name][this.styleValue.border][this.styleValue.color]
    }
    if (this.positionValue) {
      this.klassDefaultValue = this.klassDefaultValue + ' ' + this.positionClass()[this.positionValue]
    }
    this.element.className = this.element.className + ' ' + this.klassDefaultValue + ' ' + this.klassValue
    this.contentTarget.className = this.contentTarget.className + ' ' + this.contentClassDefaultValue + ' ' + this.contentClassValue
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
      this.element.classList.remove('hidden')
    } else {
      this.element.classList.add('hidden')
    }
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }

  klassDefault() {
    return {
      badge: {
        none: {
          blue: "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300",
          dark: "bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300",
          red: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",
          green: "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",
          yellow: "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",
          indigo: "bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300",
          purple: "bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300",
          pink: "bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300",
        },
        bordered: {
          blue: "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400",
          dark: "bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500",
          red: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400",
          green: "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400",
          yellow: "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300",
          indigo: "bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400",
          purple: "bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400",
          pink: "bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400",
        },
        pill: {
          blue: "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300",
          dark: "bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300",
          red: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300",
          green: "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300",
          yellow: "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300",
          indigo: "bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300",
          purple: "bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300",
          pink: "bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300",
        }
      },
      alert: {
        none: {
          blue: "p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400",
          red: "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",
          green: "p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",
          yellow: "p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",
          dark: "p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300",
        },
        bordered: {
          blue: "flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800",
          red: "flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",
          green: "flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800",
          yellow: "flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800",
          dark: "flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600",
        }
      }
    }
  }
  positionClass() {
    return {
      'topRight': 'absolute top-0 right-0 translate-x-1/2 -translate-y-1/2',
      'bottomCenter': 'absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2',
      'topCenter': 'absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',

      'leftCenter': 'absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2',

      'rightCenter': 'absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2',
      'topLeft': 'absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2',
      'bottomRight': 'absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2',
      'bottomLeft': 'absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2'
    }
  }
}