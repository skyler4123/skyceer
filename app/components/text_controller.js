import { HighlightJS } from "highlight.js"
import ApplicationController from "../javascript/controllers/application_controller";
import Dictionary from "../javascript/controllers/dictionary";
import { button, tab } from "../javascript/controllers/components";

export default class TextController extends ApplicationController {
  static targets = ["pre", "code", "copyCode"]
  static values = {
    ...super.values,
    label: { type: String },
    language: { type: String }
  }

  init() {
    this.initValue()
    this.initHTML()
    this.initTarget()
  }

  initParams() {
    this.setParams({name: 'codeLanguage', defaultValue: 'erb'})
    this.setParams({name: 'language', defaultValue: 'english'})
  }

  initValue() {
    this.labelValue = this.labelParams
    this.languageValue = this.languageParams
  }

  initHTML() {
    if (this.typeParams === 'code') {
      this.element.innerHTML = this.typeHTML.code
      this.codeTarget.textContent = this.labelValue
      this.element.insertAdjacentHTML('beforeend', this.typeHTML.copyCode)
      HighlightJS.highlightElement(this.codeTarget)
    } else {
      this.element.innerText = this.labelValue
    }
    this.element.setAttribute('open', '')
  }

  initTarget() {
    if (this.typeParams === 'code') {
      const copyCodeElement = this.element.querySelector('[data-controller*=tab]')
      copyCodeElement.setAttribute(`data-${this.identifier}-target`, 'copyCode')
    }
  }

  initAction() {
    if (this.typeParams === 'code') {
      this.addAction(this.copyCodeTarget, `click->${this.identifier}#copyCode`)
    }
  }
  
  copyCode() {
    this.copyText()
  }

  copyText() {
    window.navigator.clipboard.writeText(this.labelValue)
  }

  labelValueChanged(value, previousValue) {
    if (previousValue === undefined || previousValue === '') { return }

    this.element.innerHTML = this.labelValue
  }

  languageValueChanged(value, previousValue) {
    if (previousValue === undefined || previousValue === '') { return }
    if (this.supportLanguages.includes(this.languageValue)) {
      this.labelValue = Dictionary[this.languageKey][this.languageValue]
    } else {
      Object.entries(this.supportLanguagesObject).forEach((languageEntry) => {
        if (languageEntry[1].includes(this.languageValue)) {
          this.languageValue = languageEntry[0]
        }
      })
    }
  }

  translate(event) {
    this.languageValue = event.payload.value
  }

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

  get languageKey() {
    return this.paramsValue.languageKey || this.defaultLanguageKey
  }
  get defaultLanguageKey() {
    let defaultLanguageKey
    Object.entries(Dictionary).forEach((languageKeyObject) => {
      // languageKeyObject = ['Price': {'english': 'Price','vietnamese': 'Gia ca'}]
      const key = languageKeyObject[0]
      const keyWithLanguages = languageKeyObject[1]
      const word = keyWithLanguages[this.languageParams]
      if (word === this.labelParams) {
        defaultLanguageKey = key
      }
    })
    return defaultLanguageKey
  }
  get typeClass() {
    return {
      code: {
        element: 'flex flex-row w-full justify-between gap-x-4 bg-[#0D1117] relative rounded-md',
        textTarget: 'w-full',
        preTarget: 'w-full pr-4',
        codeTarget: 'w-full no-scrollbar rounded-md'
      },
      label: {
        element: '',
      },
    }
  }
  get typeHTML() {
    return {
      code: `
        <pre data-${this.identifier}-target="pre"><code data-${this.identifier}-target="code" class="${this.codeLanguageParams}"></code></pre>
      `,
      copyCode: tab({klass: 'absolute top-2 right-2', action: { listener: 'click', action: 'tabLast' }, restoreTimeout: 10000, restoreIndex: 0 }, () => {
        return `
          <div>${button({label: 'Copy', variant: 'pill'})}</div>
          <div>${button({label: 'Copied', variant: 'pill'})}</div>
        `
      }),
    }
  }
  get supportLanguagesObject() {
    return {
      english: ['english', 'eng', 'en'],
      vietnamese: ['vietnamese', 'vietnam', 'vn', 'viet']
    }
  }
  get supportLanguages() {
    return Object.keys(this.supportLanguagesObject)
  }


}


