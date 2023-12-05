import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    url: String
  }
  connect() {
    // console.log("Hello, Stimulus!", this);
  }
  initialize() {
    const url = this.element.parentNode.closest('[data-controller]').querySelector('a').href
    this.urlValue = url
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
