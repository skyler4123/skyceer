import ApplicationController from "../application_controller"

export default class Education_EducationSchool_DarkmodeController extends ApplicationController {
  static values = {
    class: { type: String, default: "w-4 h-4" }
  }

  init() {
    console.log(this)
    this.element.innerHTML = this.defaultHTML()
  }

  darkmodeToggle() {
    document.documentElement.classList.toggle('dark')
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
        <div><svg class="w-full h-full" data-controller="svg" data-svg-params-value='${JSON.stringify(moonParams)}'></svg></div>
        <div><svg class="w-full h-full" data-controller="svg" data-svg-params-value='${JSON.stringify(sunParams)}'></svg></div>
      </div>
    `
  }
}
