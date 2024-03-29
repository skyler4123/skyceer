import hljs from "highlight.js";
import ApplicationController from "../javascript/controllers/application_controller";

export default class TextController extends ApplicationController {
  static targets = ["pre", "code"]
  static values = {
    ...super.values,
    label: { type: String },
    language: { type: String }
  }

  initialize() {
    super.initialize()
    this.initializeValue()
    this.initializeHTML()
    this.initializeComplete()
  }

  initializeValue() {
    this.labelValue = this.label
    this.languageValue = this.language
  }

  initializeHTML() {
    if (this.type === 'code') {
      this.element.innerHTML = this.initHTML.code
      this.codeTarget.textContent = this.labelValue
      this.element.insertAdjacentHTML('beforeend', this.initHTML.copyCode)
      hljs.highlightElement(this.codeTarget)
    } else {
      this.element.innerText = this.labelValue
    }
    this.element.setAttribute('open', '')
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
      this.labelValue = this.dictionary[this.languageKey][this.languageValue]
    } else {
      Object.entries(this.supportLanguagesObject).forEach((languageEntry) => {
        if (languageEntry[1].includes(this.languageValue)) {
          this.languageValue = languageEntry[0]
        }
      })
    }
  }

  translate(event) {
    this.languageValue = event.value
  }

  openEditor() {
    this.isOpenEditorValue = true
  }

  closeEditor() {
    this.isOpenEditorValue = false
  }

  increase(event) {
    this.labelValue = Number(this.labelValue) + (Number(event.value) || 1)
  }

  decrease(event) {
    this.labelValue = Number(this.labelValue) - (Number(event.value) || 1)
  }

  get codeLanguage() {
    return this.paramsValue.codeLanguage || 'erb'
  }
  get language() {
    return this.paramsValue.language || this.defaultLanguage
  }
  get defaultLanguage() {
    return 'english'
  }
  get languageKey() {
    return this.paramsValue.languageKey || this.defaultLanguageKey
  }
  get defaultLanguageKey() {
    let defaultLanguageKey
    Object.entries(this.dictionary).forEach((languageKeyObject) => {
      // languageKeyObject = ['Price': {'english': 'Price','vietnamese': 'Gia ca'}]
      const key = languageKeyObject[0]
      const keyWithLanguages = languageKeyObject[1]
      const word = keyWithLanguages[this.language]
      if (word === this.label) {
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
  get initHTML() {
    return {
      code: `
        <pre data-${this.identifier}-target="pre"><code data-${this.identifier}-target="code" class="${this.codeLanguage}"></code></pre>
      `,
      copyCode: `
        <div class="hidden absolute top-2 right-2" data-controller="button " data-button-params-value="{&quot;events&quot;:[{&quot;id&quot;:&quot;${this.eventId}&quot;,&quot;listener&quot;:&quot;click&quot;,&quot;action&quot;:&quot;copy_text&quot;},{&quot;id&quot;:&quot;${this.eventId + 'toggle'}&quot;,&quot;listener&quot;:&quot;click&quot;,&quot;action&quot;:&quot;tab_next&quot;}]}">
          <button data-button-target="button">
            <div class="hidden" data-controller="tab " data-tab-params-value="{&quot;event_id&quot;:&quot;${this.eventId + 'toggle'}&quot;,&quot;is_restore&quot;:true,&quot;klass&quot;:&quot;rounded-md text-white w-20 py-1 flex justify-center&quot;}">
              <div class="" data-controller="text " data-text-params-value="{&quot;label&quot;:&quot;Copy&quot;}">
                <div data-text-target="text"></div>
              </div>
              <div class="hidden" data-controller="text " data-text-params-value="{&quot;label&quot;:&quot;Copied&quot;,&quot;text_class&quot;:&quot;text-green-500&quot;}">
                <div data-text-target="text"></div>
              </div>
            </div>
          </button>
        </div>
      `
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
  get dictionary() {
    return {
      // 'languageKey': { 
      //   'languageValue': 'word',
      //   ...
      // },
      'Price': { 
        'english': 'Price',
        'vietnamese': 'Gia ca'
      },
      'Car': {
        'english': 'Car',
        'vietnamese': 'Xe hoi'
      },
      'Teacher': {
        'english': 'Teacher',
        'vietnamese': 'Giao Vien'
      }
    }
  }


}


