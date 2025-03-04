import { Controller } from "@hotwired/stimulus"
import { isDefined, randomID } from "controllers/education/helpers/data_helpers"

export default class ApplicationController extends Controller {

  static targets = ['header', 'main', 'aside', 'content', 'footer', 'content', 'contentJson']
  static values = {
    isReset: { type: Boolean, default: true },
    isOpen: { type: Boolean },
    isInitialized: { type: Boolean },
    class: { type: String },
    attributes: { type: Object }
  }

  initialize() {
    if (isDefined(this.initBeforeComplete)) { this.initBeforeComplete() }
    this.isInitializedValue = false
    this.initBinding()
    if (this.isResetValue) { this.reset() }
    this.initializeID()
    this.initializeHead()
    this.initializeDir()
    if (isDefined(this.initLayout)) { this.initLayout() }
    if (isDefined(this.contentHTML)) { this.contentTarget.innerHTML = this.contentHTML() }
    if (isDefined(this.init)) { this.init() }
    this.isInitializedValue = true
    if (isDefined(this.initAfterComplete)) { this.initAfterComplete() }
  }

  initBinding() {
    this.serverHTML = this.element.innerHTML
  }
  
  reset() {
    this.element.innerHTML = ''
  }

  initializeID() {
    if (this.element.id) { return } 
    this.element.id = randomID()
  }

  initializeHead() {
    if (isDefined(this.headValue) && this.headValue.length > 0) {
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
