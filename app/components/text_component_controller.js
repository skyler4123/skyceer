import hljs from "highlight.js";
import ApplicationComponentController from './application_component_controller';

export default class TextComponentController extends ApplicationComponentController {
  static targets = ["text", "editor", "input", "pre", "code"]
  static values = {
    ...super.values,
    label: { type: String },
    language: { type: String },
    isOpenEditor: { type: Boolean }
  }

  initialize() {
    super.initialize()
    this.initializeValue()
    this.initializeHTML()
    this.initializeTarget()
    this.initializeClass()
    this.initializeAction()

    this.initializeComplete()
  }

  initializeValue() {
    this.labelValue = this.label
    this.languageValue = this.language
  }

  initializeHTML() {
    if (this.type === 'code') {
      this.textTarget.innerHTML = this.initHTML.code
      this.codeTarget.textContent = this.labelValue
      this.element.insertAdjacentHTML('beforeend', this.initHTML.copyCode)
    } else {
      this.textTarget.innerText = this.labelValue
    }
    this.textTarget.setAttribute('open', '')
  }

  initializeTarget() {
    if (this.hasEditorTarget) {
      setTimeout(() => {
        this.editorTarget.querySelector('input').setAttribute(`data-${this.identifier}-target`, 'input')
      }, 500)
    }
  }

  initializeClass() {
    if (this.type === 'code') {
      this.element.className = this.twMerge(this.element.className, this.typeClass.code.klass)
      this.textTarget.className = this.twMerge(this.textTarget.className, this.typeClass.code.textClass)
      this.preTarget.className = this.twMerge(this.preTarget.className, this.typeClass.code.preClass)
      this.codeTarget.className = this.twMerge(this.codeTarget.className, this.typeClass.code.codeClass)
      hljs.highlightElement(this.codeTarget)
    }
    this.element.className = this.twMerge(this.element.className, this.klass)
    this.textTarget.className = this.twMerge('hidden open:flex', this.textTarget.className, this.textClass)
    if (this.hasEditorTarget) {
      setTimeout(() => {
        this.editorTarget.className = this.twMerge('hidden open:flex', this.editorTarget.className, this.editorClass)
        this.inputTarget.className = this.twMerge(this.inputTarget.className, this.inputClass)  
      }, 500)
    }
  }

  copyText() {
    window.navigator.clipboard.writeText(this.labelValue)
  }

  labelValueChanged(value, previousValue) {
    if (previousValue === undefined || previousValue === '') { return }

    this.textTarget.innerHTML = this.labelValue
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

  isOpenEditorValueChanged(value, previousValue) {
    if (previousValue === undefined || previousValue === '') { return }

    if (this.isOpenEditorValue) {
      this.inputTarget.value = this.labelValue
      this.textTarget.removeAttribute('open')
      this.editorTarget.setAttribute('open', '')
    } else {
      this.labelValue = this.inputTarget.value
      this.editorTarget.removeAttribute('open', '')
      this.textTarget.setAttribute('open', '')
    }
  }

  increase(event) {
    this.labelValue = Number(this.labelValue) + (Number(event.value) || 1)
  }

  decrease(event) {
    this.labelValue = Number(this.labelValue) - (Number(event.value) || 1)
  }

  get textClass() {
    return this.optionsValue.textClass
  }
  get editorClass() {
    return this.optionsValue.editorClass
  }
  get inputClass() {
    return this.optionsValue.inputClass
  }
  get codeLanguage() {
    return this.optionsValue.codeLanguage || 'erb'
  }
  get language() {
    return this.optionsValue.language || this.defaultLanguage
  }
  get defaultLanguage() {
    return 'english'
  }
  get languageKey() {
    return this.optionsValue.languageKey || this.defaultLanguageKey
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
        klass: 'flex flex-row w-full justify-between gap-x-4 bg-[#0D1117] relative rounded-md',
        textClass: 'w-full',
        preClass: 'w-full pr-4',
        codeClass: 'w-full no-scrollbar rounded-md'
      }
    }
  }
  get initHTML() {
    return {
      code: `
        <pre data-${this.identifier}-target="pre"><code data-${this.identifier}-target="code" class="${this.codeLanguage}"></code></pre>
      `,
      copyCode: `
        <div class="hidden absolute top-2 right-2" data-controller="button-component " data-button-component-options-value="{&quot;events&quot;:[{&quot;id&quot;:&quot;${this.eventId}&quot;,&quot;listener&quot;:&quot;click&quot;,&quot;action&quot;:&quot;copy_text&quot;},{&quot;id&quot;:&quot;${this.eventId + 'toggle'}&quot;,&quot;listener&quot;:&quot;click&quot;,&quot;action&quot;:&quot;tab_next&quot;}]}">
          <button data-button-component-target="button">
            <div class="hidden" data-controller="tab-component " data-tab-component-options-value="{&quot;event_id&quot;:&quot;${this.eventId + 'toggle'}&quot;,&quot;is_restore&quot;:true,&quot;klass&quot;:&quot;bg-blue-900 rounded-md text-white w-20 py-1 flex justify-center&quot;}">
              <div class="hidden" data-controller="text-component " data-text-component-options-value="{&quot;label&quot;:&quot;Copy&quot;}">
                <div data-text-component-target="text"></div>
              </div>
              <div class="hidden" data-controller="text-component " data-text-component-options-value="{&quot;label&quot;:&quot;Copied&quot;,&quot;text_class&quot;:&quot;text-green-500&quot;}">
                <div data-text-component-target="text"></div>
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


