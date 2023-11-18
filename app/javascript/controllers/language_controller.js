import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["changeable"]
  static values = {
    currentLanguage: { type: String, default: "english" }
  }
  initialize() {
    document.querySelectorAll('[data-language-key]').forEach((element) => {
      var target = findTextElement(element)[0]
      target.setAttribute('data-language-target', 'changeable')
      target.setAttribute('data-language-key', element.dataset.languageKey)
      element.removeAttribute('data-language-key')
    })
  }
  connect() {
    // console.log(this.changeableTargets)
  }
  english() {
    if (this.currentLanguageValue == "english") { return }
    this.currentLanguageValue = "english"
    this.changeableTargets.forEach((target) => {
      target.innerText = englishDictionary[target.dataset.languageKey]
    })
  }
  vietnamese() {
    if (this.currentLanguageValue == "vietnamese") { return }
    this.currentLanguageValue = "vietnamese"
    this.changeableTargets.forEach((target) => {
      target.innerText = vietnameseDictionary[target.dataset.languageKey]
    })
  }
  spain() {
    if (this.currentLanguageValue == "spain") { return }
    this.currentLanguageValue = "spain"
    this.changeableTargets.forEach((target) => {
      target.innerText = spainDictionary[target.dataset.languageKey]
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

const englishDictionary = {
  quickstart: "Quickstart"
}
const vietnameseDictionary = {
  quickstart: "Nhanh"
}
const spainDictionary = {
  quickstart: "spain_fast"
}