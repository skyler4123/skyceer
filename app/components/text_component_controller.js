import { twMerge } from 'tailwind-merge'
import { Camelize } from "./helpers";
import hljs from "highlight.js";
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["text", "editor", "input", "pre", "code"]
  static values = {
    options: { type: Object },
    isOpen: { type: Boolean, default: true },
    isFocus: { type: Boolean },
    isActive: { type: Boolean },
    label: { type: String },
    isOpenEditor: { type: Boolean },
    language: { type: String }
  }

  initialize() {
    this.optionsValue = Camelize(this.optionsValue)
    this.initializeID()
    this.initializeValue()
    this.initializeHTML()
    this.initializeTarget()
    this.initializeClass()
    this.initializeAction()

    this.initializeComplete()
  }
  connect() {
    if (this.isTest) { console.log(this) }
  }
  initializeID() {
    if (!this.element.id) {
      this.element.id = `${this.identifier}-${crypto.randomUUID()}`
    }
  }
  initializeComplete() {
    this.element.classList.remove('hidden')
  }

  initializeValue() {
    this.labelValue = this.optionsValue.label
    this.languageValue = this.optionsValue.language || "english"
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
      this.element.className = twMerge(this.element.className, this.defaultClass.code.klass)
      // this.textTarget.className = twMerge('overflow-x-auto flex justify-start no-scrollbar', this.textTarget.className)
      this.textTarget.className = twMerge(this.textTarget.className, this.defaultClass.code.textClass)
      this.preTarget.className = twMerge(this.preTarget.className, this.defaultClass.code.preClass)
      this.codeTarget.className = twMerge(this.codeTarget.className, this.defaultClass.code.codeClass)
      hljs.highlightElement(this.codeTarget)
    }
    this.element.className = twMerge(this.element.className, this.klass)
    this.textTarget.className = twMerge('hidden open:flex', this.textTarget.className, this.textClass)
    if (this.hasEditorTarget) {
      setTimeout(() => {
        this.editorTarget.className = twMerge('hidden open:flex', this.editorTarget.className, this.editorClass)
        this.inputTarget.className = twMerge(this.inputTarget.className, this.inputClass)  
      }, 500)
    }
  }

  initializeAction() {
    if (this.eventId) {
      this.element.dataset.action = (this.element.dataset.action || "") + ` global:dispatch@window->${this.identifier}#globalDispatch`
    }
  }

  globalDispatch({ detail: { event } }) {
    if (this.eventId === event.id && this.id !== event.controller.id) {
      eval(`this.${event.action}(event)`)
    }
  }

  toggle() {
    this.isOpenValue = !this.isOpenValue
  }

  open() {
    this.isOpenValue = true
  }

  close() {
    this.isOpenValue = false
  }

  isOpenValueChanged(value, previousValue) {
    if (this.isOpenValue) {
      this.element.setAttribute('open', '')
      this.textTarget.setAttribute('open', '')
    } else {
      this.element.removeAttribute('open')
      this.textTarget.removeAttribute('open')
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
    
    this.labelValue = this.dictionary[this.languageKey][this.languageValue]
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

  get klass() {
    return this.optionsValue.klass
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
  get id() {
    return this.element.id
  }
  get isTest() {
    return this.optionsValue.isTest
  }
  get event() {
    return this.optionsValue.event
  }
  get eventId() {
    if (this.type === 'code') {
      return this.id
    }
    return this.event?.id || this.optionsValue.eventId
  }
  get type() {
    return this.optionsValue.type
  }
  get codeLanguage() {
    return this.optionsValue.codeLanguage || 'erb'
  }
  get languageKey() {
    return this.optionsValue.languageKey || this.labelValue
  }
  get defaultClass() {
    return {
      code: {
        klass: 'flex flex-row w-full justify-between gap-x-4 bg-[#0D1117] relative rounded-md',
        textClass: 'flex w-full',
        preClass: 'flex w-full pr-4',
        codeClass: 'flex flex-row w-full no-scrollbar rounded-md'
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
            <div class="hidden" data-controller="tab-component " data-tab-component-options-value="{&quot;event_id&quot;:&quot;${this.eventId + 'toggle'}&quot;,&quot;is_test&quot;:true,&quot;is_restore&quot;:true,&quot;klass&quot;:&quot;bg-blue-900 rounded-md text-white w-20 py-1 flex justify-center&quot;}">
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
  get dictionary() {
    return {
      'Price': {
        'english': 'Price',
        'vietnam': 'Gia ca'
      },
      'Car': {
        'english': 'Car',
        'vietnam': 'Xe hoi'
      },
      'Teacher': {
        'english': 'Teacher',
        'vietnam': 'Giao Vien'
      }
    }
  }


}


