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
import { COUNTRY } from "./constants/country";
import AddressHelpers from "./address_helpers";

export default class ApplicationController extends Controller {

  static values = {
    params: { type: Object },
    isOpen: { type: Boolean },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
    isHover: { type: Boolean },
    canInitialize: { type: Boolean, default: true },
    isInitialized: { type: Boolean },
    className: { type: String }
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
    if (this.isDefined(this.initClass)) { this.initClass() }
    if (this.isDefined(this.initAction)) { this.initAction() }
    if (this.isDefined(this.initComplete)) { this.initComplete() }
    this.isInitializedValue = true
  }

  setParams({name, defaultValue}) {
    if (this.isDefined(this[`${name}Params`])) { return }
    this[`${name}Params`] = this.paramsValue[name] || defaultValue
    this[`has${this.toPascalCase(name)}Params`] = true
  }

  connect() {
    if (this.isTestParams) { console.log(this) }
  }


  get id() {
    if (this.element.id) { return this.element.id }
    this.element.id = `${this.getControllerIdentifier(this.element)}:${this.newUUID()}`
    return this.element.id
  }
  
  newUUID() {
    if (this.protocol() === 'https') {
      return crypto.randomUUID()
    } else {
      return uuidv4()
    }
  }

  protocol() {
    return location.protocol
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
Object.assign(ApplicationController.prototype, AddressHelpers)
