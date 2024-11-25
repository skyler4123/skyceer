import ApplicationController from "../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  static values = {
    class: { type: String, default: "w-10 h-10" }
  }

  init() {
    console.log(this)
    this.element.innerHTML = this.defaultHTML()
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
        class="flex justify-center items-center w-full h-full cursor-pointer"
      >
        <div><svg data-controller="svg" data-svg-params-value='${JSON.stringify(moonParams)}'></svg></div>
        <div><svg data-controller="svg" data-svg-params-value='${JSON.stringify(sunParams)}'></svg></div>
      </div>
    `
  }
}
