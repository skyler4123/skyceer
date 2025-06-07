import Swal from 'sweetalert2';
import { isDefined, randomID, initializedEvent } from "controllers/education/helpers/data_helpers"
import { Controller } from "@hotwired/stimulus"

export default class ApplicationController extends Controller {
  static targets = ['header', 'main', 'aside', 'content', 'footer', 'content', 'contentJson']
  static values = {
    isReset: { type: Boolean, default: true },
    isOpen: { type: Boolean },
    isInitialized: { type: Boolean },
    class: { type: String },
    attributes: { type: Object }
  }
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

  initialize() {
    if (isDefined(this.initBeforeComplete)) { this.initBeforeComplete() }
    this.isInitializedValue = false
    if (isDefined(this.initBinding)) { this.initBinding()}
    if (this.isResetValue) { this.reset() }
    this.initializeID()
    this.initializeHead()
    this.initializeDir()
    if (isDefined(this.initializeOutlets)) { this.initializeOutlets() }
    if (isDefined(this.initLayout)) { this.initLayout() }
    if (isDefined(this.contentHTML)) { this.contentTarget.innerHTML = this.contentHTML() }
    if (isDefined(this.init)) { this.init() }
    this.isInitializedValue = true
    if (isDefined(this.initAfterComplete)) { this.initAfterComplete() }
    this.initializeCompletedEvent()
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

  initializeCompletedEvent() {
    this.element.dispatchEvent(new CustomEvent(initializedEvent, { detail: { controller: this } }))
  }

  isOpenValueChanged(value, previousValue) {
    if (value) {
      this.element.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
    }
  }

  flash(messagesObject) { // messagesObject can be: { notice: "Hello World", error: "Something went wrong" }
    this.educationFlashOutlet.messagesValue = messagesObject
  }

  modal(optionsObject) {
    this.educationModalOutlet.optionsValue = optionsObject
  }

  openModal(options = {}) {
    if (!options.html) {
      console.error("Open modal requires an html option")
      return;
    }

    Swal.fire({
      //  Require html option to be passed
      // html: options.html,
      showConfirmButton: false,
      showCloseButton: false,
      backdrop: true,
      target: document.querySelector('main'), // Default target
      ...options,
      customClass: {
        container: '!bg-transparent',
        popup: '!p-0 !bg-transparent !w-full',
        htmlContainer: '!p-0 !overflow-visible',
        ...options.customClass
      },
    });
  }
}
