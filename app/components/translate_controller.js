import ApplicationController from "../javascript/controllers/application_controller";
import Dictionary from "../javascript/controllers/dictionary";

export default class extends ApplicationController {
  static values = {
    label: String,
    language: String,
  }
  initParams() {
    this.setParams({name: 'language', defaultValue: 'english'})
    this.setParams({name: 'word', defaultValue: this.element.innerText})
  }

  init() {
    this.initValue()
  }

  initValue() {
    this.labelValue = this.element.innerText
    this.languageValue = this.languageParams
  }

  labelValueChanged(value, previousValue) {
    if (this.isUndefined(previousValue)) { return }
    this.element.innerHTML = value
  }

  languageValueChanged(value, previousValue) {
    if (this.isUndefined(previousValue) || this.isUndefined(this.labelValue)) { return }
    if (this.supportLanguages().includes(this.languageValue)) {
      this.labelValue = Dictionary[this.wordParams][this.languageValue]
    } else {
      Object.entries(this.mapSupportLanguage()).forEach((languageKeyValue) => {
        if (languageKeyValue[1].includes(this.languageValue)) {
          this.languageValue = languageKeyValue[0]
        }
      })
    }
  }

  mapSupportLanguage() {
    return {
      english: ['english', 'eng', 'en'],
      vietnamese: ['vietnamese', 'vietnam', 'vn', 'viet']
    }
  }

  supportLanguages() {
    return Object.keys(this.mapSupportLanguage())
  }

  connect() {
    // console.log("Hello, Stimulus!", this);
  }
}
