import morphdom from "morphdom"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["template"]
  static values = {
    label: { type: String, default: "Sample Text" },
    languageName: { type: String, default: "english" },
    languageKey: { type: String },
    klass: { type: String },
    textClass: { type: String },
    klassDefault: { type: String },
    textClassDefault: { type: String }
  }

  initialize() {
    this.initializeHTML()
    this.initializeClass()

    this.initializeComplete()
  }

  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeHTML() {
    morphdom(this.templateTarget, this.labelValue)
  }

  initializeClass() {
    this.element.className = this.klassValue
  }

  languageNameValueChanged() {
    if (this.languageKeyValue) {
      this.element.textContent = this.dictionary()[this.languageNameValue][this.languageKeyValue]
    } 
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
