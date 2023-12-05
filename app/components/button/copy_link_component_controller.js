import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    url: String,
    klass: { type: String, default: 'flex flex-row px-1 hover:cursor-pointer' }
  }
  connect() {
    // console.log("Hello, Stimulus!", this);
  }
  initialize() {
    this.initializeKlass()
    this.initializeUrl()
    this.initializeAction()
  }
  initializeKlass() {
    this.klassValue.split(' ').forEach((klass) => {
      this.element.classList.add(klass)
    })
  }
  initializeUrl() {
    this.urlValue = this.element.parentNode.closest('[data-controller]').querySelector('a').href
  }
  initializeAction() {
    this.element.setAttribute('data-action', `click->${this.identifier}#copyUrl`)
  }
  copyUrl() {
    navigator.clipboard.writeText(this.urlValue);
    this.element.classList.add('text-green-500')
    setTimeout(() => {
      this.element.classList.remove('text-green-500')
    }, 5000)
    
  }
}
