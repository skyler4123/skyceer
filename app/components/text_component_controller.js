import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template"]
  static values = {
    label: { type: String, default: "Text Sample" },
    klass: { type: String, default: "" },
    languageName: { type: String, default: "english" },
    languageKey: { type: String }
  }

  initialize() {
    this.initializeTarget()
    this.initializeHTML()
    this.initializeClass()

    this.initializeComplete()
  }

  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeTarget() {
    this.element.querySelector('template').setAttribute(`data-${this.identifier}-target`, 'template')
  }
  
  initializeHTML() {
    morphdom(this.templateTarget, this.labelValue)
  }

  initializeClass() {
    this.element.className = this.klassValue
  }

  languageNameValueChanged() {
    this.element.textContent = this.dictionary()[this.languageNameValue][this.languageKeyValue]
  }
  
  dictionary() {
    return {
      english: {
        quickstart: "Quickstart",
        price: "Price"
      },
      vietnamese: {
        quickstart: "Nhanh",
        price: "Gia ban"
      },
      spain: {
        quickstart: "spain_fast",
        price: "spain_price"
      }
    }
  }
}
