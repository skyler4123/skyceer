import { HighlightJS } from "highlight.js"
import ApplicationController from "../../../javascript/controllers/application_controller";
import { button, tab } from "../../../javascript/controllers/components";

export default class extends ApplicationController {
  static targets = [...super.targets, 'text', 'pre', 'code', 'copy']

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
    this.setParams({name: 'codeLanguage', defaultValue: 'erb'})
    this.setParams({name: 'label', defaultValue: this.defaultLabel()})
    // this.setParams({name: 'options', defaultValue: this.defaultOptions()})
  }

  init() {
    this.initHTML()
    this.initTarget()
  }

  initHTML() {
    this.element.innerHTML = this.defaultHTML()
    this.codeTarget.textContent = this.labelParams
  }

  initTarget() {
    const copyCodeElement = this.element.querySelector('[data-controller*=tab]')
    copyCodeElement.setAttribute(`data-${this.identifier}-target`, 'copy')
  }

  initAction() {
    this.addAction(this.copyTarget, `click->${this.identifier}#copyCode`)
  }
  
  copyCode() {
    window.navigator.clipboard.writeText(this.labelParams)
  }

  initComplete() {
    HighlightJS.highlightElement(this.codeTarget)
  }

  defaultLabel() {
    return `
<div class="w-full flex flex-row">
  <div class="w-1/4 min-h-screen">
    <%= text(label: "Components", text_class: 'mb-1 rounded-md px-2 py-1 text-sm font-semibold') %>
    <div class="px-2 py-1 text-sm">
      <%= button(label: "Basic", event: { id: new_id, action: :tab, value: 0, listener: :click, initialize: true}) %>
    </div>
  </div>
</div>
    `
  }

  variantClass() {
    return {
      default: {
        element: 'flex flex-row w-full justify-between gap-x-4 bg-[#0D1117] relative rounded-md',
        textTarget: 'w-full',
        preTarget: 'w-full pr-4',
        codeTarget: 'w-full no-scrollbar rounded-md'
      }
    }
  }

  defaultHTML() {
    return `
      <pre data-${this.identifier}-target="pre">
        <code data-${this.identifier}-target="code" class="${this.codeLanguageParams}">
        </code>
      </pre>
      ${tab({klass: 'absolute top-2 right-2', action: { listener: 'click', action: 'tabLast' }, restoreTimeout: 10000, restoreIndex: 0 }, () => {
        return `
          <div>${button({label: 'Copy', variant: 'pill'})}</div>
          <div>${button({label: 'Copied', variant: 'pill'})}</div>
        `
      })}
    `
  }
}
