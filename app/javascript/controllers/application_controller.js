import * as Helpers from "./helpers"
import * as DomHelpers from "./dom_helpers"
import Api from "./api"
import "axios";
import { v4 as uuidv4 } from "uuid"
import { twMerge } from 'tailwind-merge'
import { Controller } from "@hotwired/stimulus"

export default class ApplicationController extends Controller {
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
    isHover: { type: Boolean }
  }
  initialize() {
    this.optionsValue = this.camelizeOptionsValue(this.optionsValue)
    this.initializeController()
    if (this.isFirstController) {
      this.initializeID()
      this.initializeDir()
    }
  }

  initializeComplete() {
    this.initializeClass()
    this.initializeAction()
    this.initializeShow()
  }

  initializeShow() {
    if (this.isLastController && this.isShowAfterInitialize) {
      this.removeClass(this.element, 'hidden')
    }
  }

  initializeClass() {
    this.initializeTypeClass()
    this.initializeVariantClass()
    this.initializePositionClass()
    this.initializeCustomeClass()
  }

  initializeTypeClass() {
    if (this.type && this.typeClass) {
      Object.keys(this.typeClass[this.type]).forEach((targetString) => {
        if (targetString === 'element') {
          this.mergeClass(this.element, this.typeClass[this.type][targetString])
        } else {
          const target = targetString.replace('Target', '')
          if (this[`has${target.charAt(0).toUpperCase() + target.slice(1)}Target`]) {
            this[`${target}Targets`].forEach((targetElement) => {
              this.mergeClass(targetElement, this.typeClass[this.type][targetString])
            })
          }
        }
      })
    }
  }
  
  initializeVariantClass() {
    if (this.variant && this.variantClass) {
      let targetsWithClasses = this.getChildObjectByKeys(this.variantClass, [this.variant].flat())
      Object.keys(targetsWithClasses).forEach((targetString) => {
        if (targetString === 'element') {
          this.mergeClass(this.element, targetsWithClasses[targetString])
        } else {
          const target = targetString.replace('Target', '')
          if (this[`has${target.charAt(0).toUpperCase() + target.slice(1)}Target`]) {
            this[`${target}Targets`].forEach((targetElement) => {
              this.mergeClass(targetElement, targetsWithClasses[targetString])
            })
          }
        }
      })
    }
  }

  initializePositionClass() {
    if (this.position && this.positionClass) {
      let targetsWithClasses = this.getChildObjectByKeys(this.positionClass, [this.position].flat())
      Object.keys(targetsWithClasses).forEach((targetString) => {
        if (targetString === 'element') {
          this.mergeClass(this.element, targetsWithClasses[targetString])
        } else {
          const target = targetString.replace('Target', '')
          if (this[`has${target.charAt(0).toUpperCase() + target.slice(1)}Target`]) {
            this[`${target}Targets`].forEach((targetElement) => {
              this.mergeClass(targetElement, targetsWithClasses[targetString])
            })
          }
        }
      })
    }
  }

  initializeCustomeClass() {
    this.classParams.forEach((klass) => {
      if (klass === 'klass') {
        this.mergeClass(this.element, this.klass)
      } else {
        const targetString = klass.replace('Class', '')
        if (this[`has${targetString.charAt(0).toUpperCase() + targetString.slice(1)}Target`]) {
          this[`${targetString}Targets`].forEach((targetElement) => {
            this.mergeClass(targetElement, this.optionsValue[klass])
          })
        }
      }
    })
  }

  connect() {
    if (this.isTest) { console.log(this) }
  }
  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}:${this.newUUID}`
    }
  }
  initializeDir() {
    if (this.dir) {
      this.element.setAttribute('dir', this.dir)
    }
  }

  initializeController() {
    this.element.dataset.controller = this.element.dataset.controller.trim()  
  }

  initializeAction() {
    if (this.events) {
      this.events.forEach(event => {
        if (this.isListenerEvent(event)) {
          this.addAction(this.element, `event:${this.groupOfEvent(event)}@window->${this.identifier}#eventHandler`)
        }
        if (this.isTriggerEvent(event)) {
          this.addAction(this.element, `${event.listener}->${this.identifier}#${event.action}Dispatch`)
        }
      })
    }
    if (this.actions) {
      this.actions.forEach((action) => {
        this.addAction(this.element, `${action.listener}->${this.identifier}#${action.action}`)
      })
    }
  }

  eventHandler({ detail: { event } }) {
    if (this.eventId === event.id && this.id !== event.controller.id) {
      this[event.action](event)
    }
  }

  toggle(event) {
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

  toggleDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('toggle'), controller: this } } })
  }

  openDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('open'), controller: this } } })
  }

  closeDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('close'), controller: this } } })
  }

  switchDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('switch'), controller: this } } })
  }

  tabDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('tab'), controller: this } } })
  }

  copyLinkDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('copyLink'), controller: this } } })
  }

  copyTextDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('copyText'), controller: this } } })
  }

  scrollBackDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('scrollBack'), controller: this } } })
  }

  scrollForwardDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('scrollForward'), controller: this } } })
  }

  scrollForwardAutoDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('scrollForwardAuto'), controller: this } } })
  }

  rotateDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('rotate'), controller: this } } })
  }

  changeRatioDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('changeRatio'), controller: this } } })
  }

  tabDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('tab'), controller: this } } })
  }

  tabNextDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('tabNext'), controller: this } } })
  }

  tabBackDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('tabBack'), controller: this } } })
  }

  tabFirstDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('tabFirst'), controller: this } } })
  }

  tabLastDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('tabLast'), controller: this } } })
  }

  toggleRememberMeDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('toggleRememberMe'), controller: this } } })
  }

  increaseDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('increase'), controller: this } } })
  }

  decreaseDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('decrease'), controller: this } } })
  }

  ratingDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.eventWithAction('rating'), controller: this } } })
  }

  camelizeOptionsValue(object) {
    return Helpers.camelizeOptionsValue(object)
  }

  camelCaseForObjectKey(object, except) {
    return Helpers.camelCaseForObjectKey(object, except)
  }

  camelCaseForObjectKeyAndValue(object, except) {
    return Helpers.camelCaseForObjectKeyAndValue(object, except)
  }

  snakeCaseForObjectKey(object, except) {
    return Helpers.snakeCaseForObjectKey(object, except)
  }

  snakeCaseForObjectKeyAndValue(object, except) {
    return Helpers.snakeCaseForObjectKeyAndValue(object, except)
  }

  camelCaseForArray(array, exceptIndex) {
    return Helpers.camelCaseForArray(array, exceptIndex)
  }

  snakeCaseForArray(array, exceptIndex) {
    return Helpers.snakeCaseForArray(array, exceptIndex)
  }

  toSnakeCase(string) {
    return Helpers.toSnakeCase(string)
  }

  toCamelCase(string) {
    return Helpers.toCamelCase(string)
  }

  twMerge(...args) {
    return twMerge(...args)
  }

  changeObjectKey(object, oldKey, newKey) {
    return Helpers.changeObjectKey(object, oldKey, newKey)
  }

  deleteObjectKey(object, condition) {
    return Helpers.deleteObjectKey(object, condition)
  }

  objectOnlyKeys(object, keys) {
    return Helpers.objectOnlyKeys(object, keys)
  }

  isObject(x) {
    return Helpers.isObject(x)
  }

  isObjectEmpty(object) {
    return Helpers.isObjectEmpty(object)
  }

  isString(x) {
    return Helpers.isString(x)
  }

  isDefined(x) {
    return Helpers.isDefined(x)
  }

  isUndefined(x) {
    return Helpers.isUndefined(x)
  }

  isArray(x) {
    return Helpers.isArray(x)
  }

  getKeyEndWith(object, string) {
    return Helpers.getKeyEndWith(object, string)
  }
  isArrayHasNull(array) {
    return Helpers.isArrayHasNull(array)
  }
  isArraytNull(array) {
    return Helpers.isArraytNull(array)
  }
  isObjectHasNull(object) {
    return Helpers.isObjectHasNull(object)
  }
  isObjectNull(object) {
    return Helpers.isObjectNull(object)
  }
  getChildObjectByKeys(object, keys) {
    return Helpers.getChildObjectByKeys(object, keys)
  }
  sortNumberArray(array) {
    return Helpers.sortNumberArray(array)
  }
  sortReverseNumberArray(array) {
    return Helpers.sortReverseNumberArray(array)
  }

  initializeNextController() {
    this.nextController.init()
  }

  findController(controllerName) {
    const controllerElement = this.findControllerElement(controllerName)
    if (controllerElement) {
      let controller = this.application.getControllerForElementAndIdentifier(controllerElement, controllerName)
      if (!controller) {
        controller = this.application.getControllerForElementAndIdentifier(controllerElement, `${controllerName}-component`)
      }
      return controller
    }
  }

  findControllers(controllerName) {
    const controllerElements = this.findControllerElements(controllerName)
    let controllers = []
    if (controllerElements.length > 0) {
      controllers = Array.from(controllerElements).map((element) => this.application.getControllerForElementAndIdentifier(element, controllerName))
      if (this.isArraytNull(controllers)) {
        controllers = Array.from(controllerElements).map((element) => {
          return this.application.getControllerForElementAndIdentifier(element, `${controllerName}-component`)
        })
      }
      return controllers
    }
  }

  findControllerElement(controller) {
    return this.element.querySelector(`[data-controller*="${controller}"]`)
  }

  findControllerElements(controller) {
    return this.element.querySelectorAll(`[data-controller*="${controller}"]`)
  }

  addAction(element, action) {
    if (this.isUndefined(element)) { return }
    element.dataset.action = ((element.dataset.action || '') + ' ' + action).trim()
  }

  replaceAction(element, oldAction, newAction) {
    if (this.isUndefined(element)) { return }

    element.dataset.action = element.dataset.action.replace(oldAction, newAction).trim()
  }

  removeAction(element, action) {
    if (this.isUndefined(element)) { return }

    this.replaceAction(element, action, '')
  }

  mergeClass(element, klass) {
    if (this.isUndefined(element)) { return }
    if (element.tagName === 'svg') {
      element.className.baseVal = this.twMerge(element.className.baseVal, klass)
    } else {
      element.className = this.twMerge(element.className, klass)
    }
  }

  removeClass(element, klass) {
    if (this.isUndefined(element)) { return }

    element.classList.remove(klass)
  }

  getAttributes(element) {
    return DomHelpers.getAttributes(element)
  }
  
  cloneAttributes(element, refElement) {
    return DomHelpers.cloneAttributes(element, refElement)
  }

  createNodeFromHTML(html) {
    return DomHelpers.createNodeFromHTML(html)
  }

  mergeElementWithHTML(element, html) {
    const newNode = this.createNodeFromHTML(html).firstElementChild
    this.cloneAttributes(element, newNode)
    element.innerHTML = newNode.innerHTML
  }

  isEventBrowser(event) {
    return !!event.target
  }
  isEventDispatch(event) {
    return !this.isEventDispatch(event)
  }
  get isOpen() {
    return this.optionsValue.isOpen
  }
  get isFocus() {
    return this.optionsValue.isFocus
  }
  get isActive() {
    return this.optionsValue.isActive
  }
  get isHover() {
    return this.optionsValue.isHover
  }
  get dir() {
    return this.optionsValue.dir || false
  }
  get classParams() {
    return this.getKeyEndWith(this.optionsValue, 'lass')
  }
  get klass() {
    return this.optionsValue.klass || ''
  }

  get labelClass() {
    return this.optionsValue.labelClass || ''
  }
  get id() {
    return this.element.id
  }
  get label() {
    return this.optionsValue.label
  }
  get hasLabel() {
    return typeof this.label !== 'undefined'
  }
  get isTest() {
    return this.optionsValue.isTest
  }
  get event() {
    return this.optionsValue.event || this.events?.[0] || { event: { id: this.optionsValue.eventId } }
  }
  get events() {
    return this.optionsValue.events
  }
  get action() {
    return this.optionsValue.action || this.actions?.[0]
  }
  get actions() {
    return this.optionsValue.actions
  }
  get eventId() {
    return this.event?.id || this.optionsValue.eventId //|| this.parentButtonEventId
  }
  get eventListener() {
    return this.event.listener
  }
  get eventAction() {
    return this.event.action
  }
  get eventIds() {
    return this.events.map((event) => (event.id))
  }
  get eventGroup() {
    return this.event.group || 'global'
  }
  groupOfEvent(event) {
    return event.group || 'global'
  }
  get isEventListener() {
    return this.isDefined(this.eventId) && this.isUndefined(this.eventListener && this.isUndefined(this.eventAction))
  }
  isListenerEvent(event) {
    return event.id  && !event.listener && !event.action
  }
  get listenerEvents() {
    return this.events.filter(event => event.id && !event.listener && !event.action)
  }
  get isEventTrigger() {
    return this.isDefined(this.eventId) && this.isDefined(this.eventListener && this.isDefined(this.eventAction))
  }
  get triggerEvents() {
    return this.events.filter(event => event.id && event.listener && event.action)
  }
  isTriggerEvent(event) {
    return event.id && event.listener && event.action
  }
  eventWithAction(action) {
    return this.events.find(event => event.action === action)
  }
  get parentControllerElement() {
    return this.element.parentNode.closest('[data-controller]')
  }
  get isButtonComponentController() {
    return this.identifier === 'button-component'
  }
  get parentButtonControllerElement() {
    if (this.element.parentNode.closest('[data-controller]').dataset.controller.includes('button-component')) {
      return this.element.parentNode.closest('[data-controller*="button-component"]')
    } else {
      return false
    }
  }
  get parentButtonEventId() {
    if (this.parentButtonControllerElement) {
      return JSON.parse(this.parentButtonControllerElement.dataset.buttonComponentOptionsValue).events[0].id
    }
  }
  get label() {
    return this.optionsValue.label
  }
  get type() {
    return this.optionsValue.type
  }
  get color() {
    return this.optionsValue.color
  }
  get variant() {
    return this.optionsValue.variant
  }
  get content() {
    return this.element.innerHTML
  }
  get hasContent() {
    return this.element.childElementCount > 0
  }
  get newUUID() {
    if (this.protocol === 'https') {
      return crypto.randomUUID()
    } else {
      return uuidv4()
    }
  }
  get Api() {
    return Api
  }
  get Axios() {
    return axios
  }
  get axios() {
    return axios
  }
  get controllerNames() {
    return this.element.dataset.controller.trim().split(' ')
  }

  get controllers() {
    const controllers = this.controllerNames.map((name) => {
      return this.application.getControllerForElementAndIdentifier(this.element, name)
    })
    return controllers
  }
  get firstController() {
    return this.controllers[0]
  }
  get lastController() {
    return this.controllers[this.controllers.length - 1]
  }
  get controllerSize() {
    return this.controllerNames.length
  }

  get controllerMaxIndex() {
    return this.controllerSize - 1
  }

  get controllerIndex() {
    return this.controllerNames.indexOf(this.identifier)
  }

  get isMultiController() {
    if (this.controllerSize > 1) { return true }
  }

  get isFirstController() {
    return this.identifier === this.controllerNames[0]
  }

  get isLastController() {
    return this.identifier === this.controllerNames[this.controllerMaxIndex]
  }

  get nextController() {
    if (this.controllerIndex === this.controllerMaxIndex) {
      return null
    } else {
      return this.application.getControllerForElementAndIdentifier(this.element, this.controllerNames[this.controllerIndex + 1])
    }
  }
  
  get previousController() {
    if (this.controllerIndex === 0) {
      return null
    } else {
      return this.application.getControllerForElementAndIdentifier(this.element, this.controllerNames[this.controllerIndex - 1])
    }
  }

  get dataAction() {
    return (this.element.dataset.action || '').trim()
  }

  get dataActions() {
    return this.dataAction.split(' ')
  }
  get tag() {
    return this.element.tagName
  }
  get parentNode() {
    return this.element.parentNode
  }
  get parentElement() {
    return this.element.parentElement
  }
  get isOverideClass() {
    return this.optionsValue.isOverideClass || false
  }
  get isShowAfterInitialize() {
    return true
  }
  get isComponentController() {
    return this.identifier.endWith('-component')
  }
  get htmlTag() {
    return document.querySelector('html')
  }
  get protocol() {
    return location.protocol
  }
}