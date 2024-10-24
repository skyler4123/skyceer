import { v4 as uuidv4 } from "uuid"
import { Controller } from "@hotwired/stimulus"
import DataHelpers from "./data_helpers";
import DomHelpers from "./dom_helpers";
import DispatchHelpers from "./dispatch_helpers";
import ControllerHelpers from "./controller_helpers";
import ApiHelpers from "./api_helpers";
import { CookieHelpers } from "./cookie_helpers";
import ResponseHelpers from "./response_helpers";
import FormHelpers from "./form_helpers";

export default class ApplicationController extends Controller {

  static values = {
    params: { type: Object },
    isOpen: { type: Boolean },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
    isHover: { type: Boolean },
    canInitialize: { type: Boolean, default: true },
    isInitialized: { type: Boolean, default: false },
  }

  initialize({isPreviousControllerInitialized = false} = {}) {
    if (!this.canInitialize(isPreviousControllerInitialized)) { return }
    this.isInitializedValue = false
    if (this.isBasicController) {
      this.functionsForInitialize()
    } else {
      setTimeout(() => {
        this.functionsForInitialize()
      }, 0)
    }

  }

  functionsForInitialize() {
    this.paramsValue = this.normalizeParamsValue(this.paramsValue)
    this.initializeParams()
    this.initializeControllers()
    if (this.isFirstController) {
      this.initializeID()
      this.initializeDir()
    }
    if (this.isDefined(this.init)) { this.init() }
    this.initializeComplete()
  }

  canInitialize(isPreviousControllerInitialized) {
    if (!this.canInitializeValue) { return false }
    if (this.isFirstController) { return true }
    if (isPreviousControllerInitialized) { return true }
    return false
  }

  canInitializeValueChanged(value, previousValue) {
    if (value === true && previousValue === false) {
      this.initialize()
    }
  }

  initializeControllers() {
    if (this.controllersParams) {
      let currentControllers = this.element.dataset.controller
      this.controllersParams.forEach((controller) => {
        currentControllers = currentControllers.concat(' ', controller)
      })
      this.element.dataset.controller = currentControllers
    }
    // this.element.dataset.controller = this.element.dataset.controller.trim()
  }

  initializeParams() {
    Object.keys(this.paramsValue).forEach(key => {
      this.setParams({name: key})
    })
    if (this.isDefined(this.initParams)) { this.initParams() }
  }

  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}:${this.newUUID()}`
    }
  }
  initializeDir() {
    if (this.hasDirParams) {
      this.element.setAttribute('dir', this.dirParams)
    }
  }

  initializeComplete() {
    this.initializeClass()
    this.initializeAction()
    this.initializeDispatcher()
    this.initializeReceiver()
    this.initializeDataAttribute()
    this.initializeShow()
    if (this.isDefined(this.initComplete)) { this.initComplete() }
    this.isInitializedValue = true
  }

  isInitializedValueChanged(value, previousValue) {
    if (this.isInitializedValue) {
      if (!this.isLastController) {
        this.initializeNextController()
      }
    }
  }

  initializeDataAttribute() {
    if (this.dataParams) {
      this.dataParams.forEach((dataParam) => {
        for (const [key, value] of Object.entries(dataParam)) {
          this.element.setAttribute(`data-${key}`, value)
        }
      })
    }
  }

  get getBasicControllerIdentifiers() {
    return [
      'accordion',
      'box',
      'button',
      'carousel',
      'hr',
      'icon',
      'img',
      'input',
      'link',
      'list',
      'mockup',
      'modal',
      'popover',
      'ratio',
      'select',
      'skeleton',
      'tab',
      'table',
      'text',
      'toast',
      'video'
    ]
  }
  get isBasicController() {
    return this.getBasicControllerIdentifiers.includes(this.identifier)
  }

  initializeShow() {
    if (this.isLastController) {
      if (this.hasIsShowAfterInitializeParams) {
        if (this.isShowAfterInitializeParams) {
          this.removeClass(this.element, 'hidden')
        }
      } else {
        this.removeClass(this.element, 'hidden')
      }
    }
  }

  initializeClass() {
    const originalClass = this.element.className
    this.initializeVariantClass()
    this.initializePositionClass()
    this.initializeTypeClass()
    this.initializeCustomClass()
    this.mergeClass(this.element, originalClass)
  }

  initializeTypeClass() {
    if (this.typeParams && this.isString(this.typeParams) && this.typeClass) {
      Object.keys(this.typeClass[this.typeParams]).forEach((targetString) => {
        if (targetString === 'element') {
          this.mergeClass(this.element, this.typeClass[this.typeParams][targetString])
        } else {
          const target = targetString.replace('Target', '')
          if (this[`has${target.charAt(0).toUpperCase() + target.slice(1)}Target`]) {
            this[`${target}Targets`].forEach((targetElement) => {
              this.mergeClass(targetElement, this.typeClass[this.typeParams][targetString])
            })
          }
        }
      })
    }
    if (this.isDefined(this.initTypeClass)) { this.initTypeClass() }
  }
  
  initializeVariantClass() {
    if (this.variantParams && this.variantClass) {
      let targetsWithClasses = this.getChildObjectByKeys(this.variantClass(), [this.variantParams].flat())
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
    if (this.isDefined(this.initVariantClass)) { this.initVariantClass() }
  }

  initializePositionClass() {
    if (this.hasPositionParams && this.positionClass) {
      let targetsWithClasses = this.getChildObjectByKeys(this.positionClass, [this.positionParams].flat())
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
    if (this.isDefined(this.initPositionClass)) { this.initPositionClass() }
  }

  initializeCustomClass() {
    this.classParams.forEach((klass) => {
      if (klass === 'klass') {
        this.mergeClass(this.element, this.klassParams)
      } else {
        const targetString = klass.replace('Class', '')
        if (this[`has${targetString.charAt(0).toUpperCase() + targetString.slice(1)}Target`]) {
          this[`${targetString}Targets`].forEach((targetElement) => {
            this.mergeClass(targetElement, this[`${klass}Params`])
          })
        }
      }
    })
  }

  setParams({name, defaultValue}) {
    if (this.isDefined(this[`${name}Params`])) { return }
    this[`${name}Params`] = this.paramsValue[name] || defaultValue
    this[`has${this.toPascalCase(name)}Params`] = true
  }

  connect() {
    if (this.isTestParams) { console.log(this) }
  }

  initializeAction() {
    if (this.eventsParams) {
      this.eventsParams.forEach(event => {
        if (this.isListenerEvent(event)) {
          this.addAction(this.element, `event:${this.groupOfEvent(event)}@window->${this.identifier}#eventHandler`)
        }
        if (this.isTriggerEvent(event)) {
          switch(event.listener) {
            case 'hover':
              this.addAction(this.element, `mouseenter->${this.identifier}#${event.action}Dispatch mouseleave->${this.identifier}#${event.action}Dispatch`)
              break;
            case 'clickOutside':
              this.addAction(this.element, `${this.identifier}:click:outside->${this.identifier}#${event.action}Dispatch`)
              break;
            default:
              this.addAction(this.element, `${event.listener}->${this.identifier}#${event.action}Dispatch`)
          }
        }
      })
    }
    if (this.hasActionsParams) {
      this.actionsParams.forEach((action) => {
        switch(action.listener) {
          case 'hover':
            this.addAction(this.element, `mouseenter->${this.identifier}#${action.action} mouseleave->${this.identifier}#${action.action}`)
            break;
          case 'clickOutside':
            this.addAction(this.element, `${this.identifier}:click:outside->${this.identifier}#${action.action}`)
            break;
          default:
            this.addAction(this.element, `${action.listener}->${action.controller || this.identifier}#${action.action}`)
        }
      })
    }
    if (this.isDefined(this.initAction)) { this.initAction() }
  }

  initializeDispatcher() {
    if (!this.hasDispatchersParams) { return }
    this.dispatchersParams.forEach((dispatcher) => {
      this.addAction(this.element, `${dispatcher.listener}->${this.identifier}#dispatchToGlobal`)
      this.addClass(this.element, `dispatcher-id-${dispatcher.id}`)
    })
  }

  dispatchToGlobal(event) {
    const dispatcher = this.findElementFromObjectArrayByObject(this.dispatchersParams, {listener: event.type})
    this.dispatch(dispatcher.id, { detail: dispatcher })
    console.log(`dispatcher: ${JSON.stringify(dispatcher)} `)
  }
  initializeReceiver() {
    if (!this.hasReceiversParams) { return }
    setTimeout(() => {
      this.receiversParams.forEach((receiver) => {
        const dispatcherElement = document.querySelector(`.dispatcher-id-${receiver.id}`)
        const dispatcherIdentifier = this.getIdentifierFromElement(dispatcherElement)
        this.addAction(this.element, `${dispatcherIdentifier}:${receiver.id}@window->${this.identifier}#receiveFromGlobal`)
      })
    }, 3000)
  }
  receiveFromGlobal(event) {
    const eventAction = event.detail.action
    this[eventAction]()
  }

  initializeNextController() {
    if (this.nextController) {
      this.nextController.initialize({isPreviousControllerInitialized: true})
    } else {
      this.intervalTime = 0
      this.intervalId = setInterval(() => {
        this.intervalTime += 1
        if (this.intervalTime > 10) {
          clearInterval(this.intervalId)
          console.log('Can not find the controller! Are you sue it is correct controller?')
          return
        } 
        this.nextController && this.nextController.initialize({isPreviousControllerInitialized: true})
        clearInterval(this.intervalId)
      }, 1000)  
    }
  }

  get classParams() {
    return this.getKeyEndWith(this.paramsValue, 'lass')
  }

  get id() {
    if (this.element.id) {
      return this.element.id
    } else {
      this.element.id = `${this.getControllerIdentifier(this.element)}:${this.newUUID()}`
      return this.element.id
    }
  }
  
  get eventParams() {
    return this.eventsParams[0]
  }
  
  get eventIdParams() {
    return  this.eventParams.id
  }

  get eventIdsParams() {
    return this.eventsParams.map((event) => (event.id))
  }
  get eventGroupParams() {
    return this.eventParams.group || 'global'
  }
  groupOfEvent(event) {
    return event.group || 'global'
  }

  isListenerEvent(event) {
    return event && this.isDefined(event.id) && this.isUndefined(event.listener) && this.isUndefined(event.action)
  }
  get listenerEvents() {
    return this.eventsParams.filter(event => this.isListenerEvent(event))
  }

  get triggerEvents() {
    return this.events.filter(event => this.isTriggerEvent(event))
  }
  isTriggerEvent(event) {
    return event && this.isDefined(event.id) && this.isDefined(event.listener) && this.isDefined(event.action)
  }

  get parentControllerElement() {
    return this.element.parentNode.closest('[data-controller]')
  }
  
  get content() {
    return this.element.innerHTML
  }
  get hasContent() {
    return this.element.childElementCount > 0
  }
  newUUID() {
    if (this.protocol === 'https') {
      return crypto.randomUUID()
    } else {
      return uuidv4()
    }
  }
  get Api() {
    return Api
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

  get childrenControllerElements() {
    return this.element.querySelectorAll('[data-controller]')
  }

  get childrenControllers() {
    return Array.from(this.childrenControllerElements).map(element => {
      return this.application.getControllerForElementAndIdentifier(element, this.getIdentifierFromElement(element))
    })
  }

  get hasChildrenController() {
    return this.childrenControllerElements.length > 0
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
    return this.controllerIndex === 0
  }

  get isLastController() {
    return this.controllerIndex === this.controllerMaxIndex
  }

  get nextController() {
    return this.controllers[this.controllerIndex + 1]
  }
  
  get previousController() {
    return this.controllers[this.controllerIndex + 1]
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
    return this.paramsValue.isOverideClass || false
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

  addCookieOutlet() {
    if (this.element.attributes[`data-${this.identifier}-cookie-outlet`]) { return }
    this.element.setAttribute(`data-${this.identifier}-cookie-outlet`, 'body')
  }

  isSuccess(response) {
    return (response.status >= 200 && response.status < 300)
  }

  isFail(response) {
    return !this.isSuccess(response)
  }

  createEventBrige({fromElement, toElement, toAction}) {
    this.addAction(toElement, `${this.getId(fromElement)}@window->${this.rawIdentifier(toElement)}#${toAction}`)
  }

  dispatchGlobal({payload}) {
    this.dispatch(this.rawId(this.element), { detail: payload })
  }
}

Object.assign(ApplicationController.prototype, DataHelpers)
Object.assign(ApplicationController.prototype, DomHelpers)
Object.assign(ApplicationController.prototype, DispatchHelpers)
Object.assign(ApplicationController.prototype, ControllerHelpers)
Object.assign(ApplicationController.prototype, ApiHelpers)
Object.assign(ApplicationController.prototype, CookieHelpers)
Object.assign(ApplicationController.prototype, ResponseHelpers)
Object.assign(ApplicationController.prototype, FormHelpers)

