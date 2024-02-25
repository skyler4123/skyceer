import * as Helpers from "./helpers"
import * as DomHelpers from "./dom_helpers"
import Api from "./api"
import "axios";
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

    // if (this.isLastController) {
    //   if (this.isShowAfterInitialize) {
    //     this.removeClass(this.element, 'hidden')
    //   }
    // } else {
    //   this.initializeNextController()
    // }
  }

  initializeShow() {
    if (this.isShowAfterInitialize) {
      this.removeClass(this.element, 'hidden')
    }
  }

  initializeClass() {
    if (this.typeClass) {
      Object.keys(this.typeClass[this.type]).forEach((targetString) => {
        // targetString = 'carouselTarget'
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
      this.element.id = `${this.identifier}-${this.newUUID}`
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
    if (this.eventId && !this.isButtonComponentController) {
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

  getKeyEndWith(object, string) {
    return Helpers.getKeyEndWith(object, string)
  }
  initializeNextController() {
    this.nextController.init()
  }

  findController(controller) {
    const findControllerElement = this.findControllerElement(controller)
    if (findControllerElement) {
      let findController = this.application.getControllerForElementAndIdentifier(findControllerElement, controller)
      if (!findController) {
        findController = this.application.getControllerForElementAndIdentifier(findControllerElement, `${controller}-component`)
      }
      return findController
    }
  }

  findControllerElement(controller) {
    return this.element.querySelector(`[data-controller*="${controller}"]`)
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
      element.classList = this.twMerge(element.classList, klass)
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

  mergeElementWithHTML(html) {
    const newNode = this.createNodeFromHTML(html).firstElementChild
    this.cloneAttributes(this.element, newNode)
    this.element.innerHTML = newNode.innerHTML
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
    // const klass = this.optionsValue.klass
    // if (!this.isDefined(klass)) { return { element: '' } }

    // if (this.isString(klass)) {
    //   return { element: klass }
    // }
    // if (this.isObject(klass)) {
    //   return this.optionsValue.klass
    // }
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
    return this.optionsValue.event
  }
  get events() {
    return this.optionsValue.events
  }
  get action() {
    return this.optionsValue.action
  }
  get actions() {
    return this.optionsValue.actions
  }
  get eventId() {
    return this.event?.id || this.optionsValue.eventId || this.parentButtonEventId
  }
  get eventIds() {
    return this.events.map((event) => (event.id))
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
    return this.optionsValue.type || 'default'
  }
  get color() {
    return this.optionsValue.color
  }
  get variant() {
    return this.optionsValue.variant || this.color
  }
  get content() {
    return this.element.innerHTML
  }
  get hasContent() {
    return this.element.childElementCount > 0
  }
  get newUUID() {
    return crypto.randomUUID()
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
}