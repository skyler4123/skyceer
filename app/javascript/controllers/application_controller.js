import { Controller } from "@hotwired/stimulus"
import DataHelpers from "./data_helpers";
import DomHelpers from "./dom_helpers";
// import DispatchHelpers from "./dispatch_helpers";
// import ControllerHelpers from "./controller_helpers";
// import ApiHelpers from "./api_helpers";
// import { CookieHelpers } from "./cookie_helpers";
// import ResponseHelpers from "./response_helpers";
// import FormHelpers from "./form_helpers";

export default class ApplicationController extends Controller {

  static values = {
    params: { type: Object },
    isOpen: { type: Boolean },
    isInitialized: { type: Boolean },
    className: { type: String },
    attributes: { type: Object }
  }

  initialize() {
    this.isInitializedValue = false
    this.paramsValue = this.normalizeParamsValue(this.paramsValue)
    this.initializeParams()
    this.initializeID()
    this.initializeDir()
    if (this.isDefined(this.init)) { this.init() }
    this.initializeComplete()
  }

  initializeParams() {
    Object.keys(this.paramsValue).forEach(key => {
      this.setParams({name: key})
    })
    if (this.isDefined(this.initParams)) { this.initParams() }
  }

  initializeID() {
    if (this.element.id) { return } 
    this.element.id = `${this.identifier}:${this.newUUID()}`
  }
  initializeDir() {
    if (this.element.hasAttribute('dir')) { return }
    if (this.hasDirParams) {
      this.element.setAttribute('dir', this.dirParams)
    }
  }

  initializeComplete() {
    this.initializeAttribute()
    this.initializeClass()
    if (this.isDefined(this.initClass)) { this.initClass() }
    if (this.isDefined(this.initAction)) { this.initAction() }
    if (this.isDefined(this.initComplete)) { this.initComplete() }
    this.isInitializedValue = true
  }

  initializeAttribute() {
    Object.keys(this.attributesValue).forEach(key => {
      this.element.setAttribute(key, this.attributesValue[key])
    })
  }

  initializeClass() {
    if (this.classNameValue.length < 1) { return }
    this.addClass(this.element, this.classNameValue)
  }
  setParams({name, defaultValue}) {
    if (this.isDefined(this[`${name}Params`])) { return }
    this[`${name}Params`] = this.paramsValue[name] || defaultValue
    this[`has${this.toPascalCase(name)}Params`] = true
  }

  connect() {
    if (this.isTestParams) { console.log(this) }
  }

  open() {
    this.isOpenValue = true
  }

  close() {
    this.isOpenValue = false
  }

  toggle() {
    this.isOpenValue = !this.isOpenValue
  }

  isOpenValueChanged(value, previousValue) {
    if (value) {
      this.element.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
    }
  }

  protocol() {
    return location.protocol
  }

  addClass(element, klass) {
    if (element.tagName === 'svg') {
      element.className.baseVal = element.className.baseVal.concat(klass)
      element.className.baseVal = element.className.baseVal.trim()
    } else {
      element.className = element.className.concat(klass)
      element.className = element.className.trim()
    }
  }

  mergeElementWithHTML(element, html) {
    const newNode = this.createNodeFromHTML(html).firstElementChild
    this.cloneAttributes(element, newNode)
    element.innerHTML = newNode.innerHTML
  }

  createNodeFromHTML(html) {
    return document.createRange().createContextualFragment(html)
  }

  cloneAttributes(element, refElement) {
    const refAttributes = this.getAttributes(refElement)
    Object.keys(refAttributes).forEach((attributeKey) => {
      element.setAttribute(attributeKey, refAttributes[attributeKey])
    })
    return element
  }

  getAttributes(element) {
    let result = {}
    Array.from(element.attributes).forEach(((nodeMap) => {
      result = { ...result, [nodeMap.nodeName]: nodeMap.nodeValue }
    }))
    return result
  }
}

Object.assign(ApplicationController.prototype, DataHelpers)
Object.assign(ApplicationController.prototype, DomHelpers)
// Object.assign(ApplicationController.prototype, DispatchHelpers)
// Object.assign(ApplicationController.prototype, ControllerHelpers)
// Object.assign(ApplicationController.prototype, ApiHelpers)
// Object.assign(ApplicationController.prototype, CookieHelpers)
// Object.assign(ApplicationController.prototype, ResponseHelpers)
// Object.assign(ApplicationController.prototype, FormHelpers)