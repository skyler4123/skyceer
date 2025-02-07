import { Controller } from "@hotwired/stimulus"

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
    isReset: { type: Boolean, default: true },
    isOpen: { type: Boolean },
    isInitialized: { type: Boolean },
    class: { type: String },
    attributes: { type: Object }
  }

  initialize() {
    if (this.isDefined(this.initBeforeComplete)) { this.initBeforeComplete() }
    this.isInitializedValue = false
    if (this.isResetValue) { this.reset() }
    this.initializeID()
    this.initializeHead()
    this.initializeDir()
    if (this.isDefined(this.initLayout)) { this.initLayout() }
    if (this.isDefined(this.init)) { this.init() }
    this.isInitializedValue = true
    if (this.isDefined(this.initAfterComplete)) { this.initAfterComplete() }
    
  }

  reset() {
    this.element.innerHTML = ''
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

  isOpenValueChanged(value, previousValue) {
    if (value) {
      this.element.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
    }
  }

}
