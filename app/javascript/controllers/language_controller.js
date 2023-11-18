import { Controller } from "@hotwired/stimulus"
import morphdom from "morphdom"

export default class extends Controller {
  static targets = ["changeable"]
  static values = {
    currentLanguage: { type: String, default: "english" }
  }
  initialize() {
    document.querySelectorAll('[data-language-key]').forEach((element) => {
      element.setAttribute('data-language-target', 'changeable')
    })
  }
  connect() {
    // console.log(this.changeableTargets)
  }
  english() {
    if (this.currentLanguageValue == "english") { return }
    this.currentLanguageValue = "english"
  }
  vietnamese() {
    if (this.currentLanguageValue == "vietnamese") { return }
    this.currentLanguageValue = "vietnamese"
  }
  spain() {
    if (this.currentLanguageValue == "spain") { return }
    this.currentLanguageValue = "spain"
  }
  currentLanguageValueChanged(nextLanguage, previousLanguage) {
    if (!previousLanguage) { return }
    this.changeableTargets.forEach((target) => {
      const previousWord = I18n[previousLanguage][target.dataset.languageKey]
      const nextWord = I18n[nextLanguage][target.dataset.languageKey]
      const nextHTML = target.outerHTML.replace(previousWord, nextWord)
      morphdom(target, nextHTML)
    })
  }
}

function findTextElement(element) {
  if (element.childElementCount === 0 && element.innerText) {
    return [element]; // Returning an array of elements in case there are multiple leaf elements
  } else {
    let elements = []; // Array to store the elements
    Array.from(element.children).forEach((childElement) => {
      const childElements = findTextElement(childElement); // Recursively call the function for each child element
      elements = elements.concat(childElements); // Concatenate the returned elements
    });
    return elements; // Return the aggregated elements
  }
}

const I18n = {
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
