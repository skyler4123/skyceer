import { Controller } from "@hotwired/stimulus"
import DataHelpers from "./helpers/data_helpers";
import DomHelpers from "./helpers/dom_helpers";
import Swal from 'sweetalert2'
// import DispatchHelpers from "./dispatch_helpers";
// import ControllerHelpers from "./controller_helpers";
// import ApiHelpers from "./api_helpers";
// import { CookieHelpers } from "./cookie_helpers";
// import ResponseHelpers from "./response_helpers";
// import FormHelpers from "./form_helpers";

export default class ApplicationController extends Controller {
  static get identifier() {
    let identifier
    identifier = this.name
    identifier = identifier.replace('Controller', '')
    identifier = identifier.replaceAll('_', 'NAMESPACE')
    identifier = identifier
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');
    identifier = identifier.replaceAll('namespace', '')
    // identifier = "data-controller=" + identifier
    return identifier
  }
  static targets = ['header', 'main', 'aside', 'content', 'footer', 'content', 'contentJson']
  static values = {
    params: { type: Object },
    isOpen: { type: Boolean },
    isInitialized: { type: Boolean },
    class: { type: String },
    attributes: { type: Object }
  }

  initialize() {
    this.isInitializedValue = false
    this.paramsValue = this.normalizeParamsValue(this.paramsValue)
    this.initializeParams()
    this.initializeID()
    this.initializeHead()
    this.initializeDir()
    if (this.isDefined(this.initLayout)) { this.initLayout() }
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
  initializeHead() {
    if (this.isDefined(this.headValue) && this.headValue.length > 0) {
      document.head.insertAdjacentHTML('beforeend', this.headValue)
    }
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
    if (this.hasFlash()) { this.initFlash() }
    this.isInitializedValue = true
  }

  initializeAttribute() {
    Object.keys(this.attributesValue).forEach(key => {
      this.element.setAttribute(key, this.attributesValue[key])
    })
  }

  initializeClass() {
    if (this.isEmpty(this.classValue)) { return }

    if (this.isString(this.classValue)) {
      this.addClass(this.element, this.classValue)
      return
    }

    if (this.isObject(this.classValue)) {
      const targets = Object.keys(this.classValue)
      targets.forEach(target => {
        if (target === 'element') {
          this.addClass(this.element, this.classValue[target])
        } else {
          this[`${target}Targets`].forEach((targetElement) => {
            this.addClass(targetElement, this.classValue[target])
          })
        }
      })
      return
    }
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

  contentJson() {
    if (this.hasContentJsonTarget) {
      return JSON.parse(this.contentJsonTarget.innerHTML)
    }
    return {}
  }

  contentData() {
    if (this.isEmpty(this.contentJson())) { return [] }
    return this.contentJson().data
  }

  contentPagination() {
    if (this.isEmpty(this.contentJson())) { return {} }
    return this.contentJson().pagination
  }

  contentFlash() {
    if (this.isEmpty(this.contentJson())) { return {} }
    return this.contentJson().flash
  }

  hasFlash() {
    return !this.isEmpty(this.contentFlash())
  }

  initFlash() {
    const flashMessages = this.contentFlash();
    Object.entries(flashMessages).forEach(([type, message], index) => {
      console.log(index)
      setTimeout(() => {
        Swal.fire({
          position: "top",
          html: this.flashHTML(type, message),
          showConfirmButton: false,
          timer: 3000,
          backdrop: false,
          customClass: {
            container: '...1',
            popup: '!p-0',
            header: '...2',
            title: '...3',
            closeButton: '...',
            icon: '...',
            image: '...',
            htmlContainer: '!p-0',
            input: '...',
            inputLabel: '...',
            validationMessage: '...',
            actions: '...',
            confirmButton: '...',
            denyButton: '...',
            cancelButton: '...',
            loader: '...5',
            footer: '....6',
            timerProgressBar: '....7',
          }
        });
      }, 3000 * index)

    });
  }

  flashHTML(type = "notice", message) {
    switch (type) {
      case "error":
        return `<div class='w-full text-center py-2 px-3 bg-red-50 text-red-500 font-medium rounded-lg inline-block' id='error'>${message}</div>`
      case "info":
        return `<div class='w-full text-center py-2 px-3 bg-blue-50 text-blue-500 font-medium rounded-lg inline-block' id='info'>${message}</div>`
      case "alert":
        return `<div class='w-full text-center py-2 px-3 bg-red-50 text-red-500 font-medium rounded-lg inline-block' id='alert'>${message}</div>`
      case "warning":
        return `<div class='w-full text-center py-2 px-3 bg-yellow-50 text-yellow-500 font-medium rounded-lg inline-block' id='warning'>${message}</div>`
      case "notice":
        return `<div class='w-full text-center py-2 px-3 bg-green-50 text-green-500 font-medium rounded-lg inline-block' id='notice'>${message}</div>`
    }
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