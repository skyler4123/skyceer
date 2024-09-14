import dayjs from 'dayjs'
import ApplicationController from "../javascript/controllers/application_controller";
// import Dictionary from "../javascript/controllers/dictionary";
import { button, tab } from "../javascript/controllers/components";

export default class TextController extends ApplicationController {
  static values = {
    ...super.values,
    label: { type: String },
    // language: { type: String }
  }
  static outlets = ['cookie']

  init() {
    this.initValue()
    this.initHTML()
  }

  initValue() {
    // this.languageValue = this.languageParams

    if (this.typeParams && this.typeParams[0] === 'cookie') { 
      this.labelValue = this.getCookie('email')
      return
    }
    this.labelValue = this.labelParams
  }

  initHTML() {
    this.element.innerText = this.labelValue
    this.element.setAttribute('open', '')
  }

  labelValueChanged(value, previousValue) {
    this.element.innerHTML = this.labelValue
  }

  // languageValueChanged(value, previousValue) {
  //   if (previousValue === undefined || previousValue === '') { return }
  //   if (this.supportLanguages.includes(this.languageValue)) {
  //     this.labelValue = Dictionary[this.languageKey][this.languageValue]
  //   } else {
  //     Object.entries(this.supportLanguagesObject).forEach((languageEntry) => {
  //       if (languageEntry[1].includes(this.languageValue)) {
  //         this.languageValue = languageEntry[0]
  //       }
  //     })
  //   }
  // }

  // translate(event) {
  //   this.languageValue = event.payload.value
  // }

  openEditor() {
    this.isOpenEditorValue = true
  }

  closeEditor() {
    this.isOpenEditorValue = false
  }

  increase(event) {
    this.labelValue = Number(this.labelValue) + (Number(event.payload.value) || 1)
  }

  decrease(event) {
    this.labelValue = Number(this.labelValue) - (Number(event.payload.value) || 1)
  }

  // get languageKey() {
  //   return this.paramsValue.languageKey || this.defaultLanguageKey
  // }
  // get defaultLanguageKey() {
  //   let defaultLanguageKey
  //   Object.entries(Dictionary).forEach((languageKeyObject) => {
  //     // languageKeyObject = ['Price': {'english': 'Price','vietnamese': 'Gia ca'}]
  //     const key = languageKeyObject[0]
  //     const keyWithLanguages = languageKeyObject[1]
  //     const word = keyWithLanguages[this.languageParams]
  //     if (word === this.labelParams) {
  //       defaultLanguageKey = key
  //     }
  //   })
  //   return defaultLanguageKey
  // }
  get typeClass() {
    return {
      label: {
        element: '',
      },
      time: {
        element: ''
      },
      email: {
        element: ''
      }
    }
  }
  // get supportLanguagesObject() {
  //   return {
  //     english: ['english', 'eng', 'en'],
  //     vietnamese: ['vietnamese', 'vietnam', 'vn', 'viet']
  //   }
  // }
  // get supportLanguages() {
  //   return Object.keys(this.supportLanguagesObject)
  // }


}


