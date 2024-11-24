import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

  initialize() {
    // this.element.innerHTML = this.defaultHTML()
  }

  darkmodeToggle() {
    this.htmlTag.classList.toggle('dark')
  }

  defaultHTML() {
    const moonParams = { variant: ['outline', 'moon']}
    const sunParams = {variant: ['outline', 'sun']}
    return `
      <div 
        data-controller="tab"
        data-action="click->tab#tabNext click->${this.identifier}#darkmodeToggle"
        class="flex justify-center items-center w-fit h-fit cursor-pointer"
      >
        <div><svg data-controller="svg" data-svg-params-value='${JSON.stringify(moonParams)}'></svg></div>
        <div><svg data-controller="svg" data-svg-params-value='${JSON.stringify(sunParams)}'></svg></div>
      </div>
    `
  }
}
