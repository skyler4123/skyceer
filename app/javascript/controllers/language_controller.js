import ApplicationController from "./application_controller"
import Dictionary from "./dictionary"

export default class LanguageController extends ApplicationController {
  static targets = ['text', 'switch']
  static values = {
    language: { type: String, default: 'english' }
  }

  init() {
    this.initLanguageKey()
  }

  initLanguageKey(target) {
    setTimeout(() => {
      this.textTargets.forEach(target => {
        if (target.dataset.languageKeyParam?.length > 0) { return }
        target.setAttribute(`data-${this.identifier}-key-param`, target.innerText)
      })
    }, 1000)
  }

  translate(event) {
    this.languageValue = event.params.language
  }

  languageValueChanged(value, previousValue) {
    if (!this.isInitializedValue) { return }
    
    if (!this.supportLanguages().includes(this.languageValue)) {
      this.normalizeLanguageValue()
      return
    }

    this.translateTextToNewLanguage()
  }

  normalizeLanguageValue() {
    Object.entries(this.supportLanguageVariants()).forEach((languageVariant) => {
      const languageName = languageVariant[0] // english, vietnamese, ...
      const laguageVariants = languageVariant[1] // en, enlish, eng, EN, ...
      if (laguageVariants.includes(this.languageValue)) {
        this.languageValue = languageName
      }
    })
  }

  translateTextToNewLanguage() {
    this.textTargets.forEach(target => {
      const languageKey = target.dataset.languageKeyParam
      const newText = Dictionary[languageKey][this.languageValue]
      this.updateText(target, newText)
    })
  }

  supportLanguageVariants() {
    return {
      english: ['english', 'eng', 'en'],
      vietnamese: ['vietnamese', 'vietnam', 'vn', 'viet']
    }
  }
  supportLanguages() {
    return Object.keys(this.supportLanguageVariants())
  }
}
