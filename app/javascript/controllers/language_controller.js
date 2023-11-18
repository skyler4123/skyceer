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
    this.changeableTargets.forEach((target) => {
      const nextHTML = target.outerHTML.replace(this.currentWord(target), englishDictionary[target.dataset.languageKey])
      morphdom(target, nextHTML)
    })
    this.currentLanguageValue = "english"
  }
  vietnamese() {
    if (this.currentLanguageValue == "vietnamese") { return }
    this.changeableTargets.forEach((target) => {
      const nextHTML = target.outerHTML.replace(this.currentWord(target), vietnameseDictionary[target.dataset.languageKey])
      morphdom(target, nextHTML)
    })
    this.currentLanguageValue = "vietnamese"
  }
  spain() {
    if (this.currentLanguageValue == "spain") { return }
    this.changeableTargets.forEach((target) => {
      const nextHTML = target.outerHTML.replace(this.currentWord(target), spainDictionary[target.dataset.languageKey])
      morphdom(target, nextHTML)
    })
    this.currentLanguageValue = "spain"
  }
  currentWord(element) {
    switch(this.currentLanguageValue) {
      case "english":
        return englishDictionary[element.dataset.languageKey]
      case "vietnamese":
        return vietnameseDictionary[element.dataset.languageKey]
      case "spain":
        return spainDictionary[element.dataset.languageKey]
    }
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
  quickstart: "Quickstart",
  price: "Price"
}
const vietnameseDictionary = {
  quickstart: "Nhanh",
  price: "Gia ban"
}
const spainDictionary = {
  quickstart: "spain_fast",
  price: "spain_price"
}