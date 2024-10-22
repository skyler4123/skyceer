import { Icon, Tab } from "../../../javascript/controllers/components";
import ApplicationController from "../../../javascript/controllers/application_controller";

export default class Views_Global_DarkmodeController extends ApplicationController {

  initAction() {
    this.addAction(this.element, `click->${this.identifier}#darkmodeToggle`)
  }

  darkmodeToggle() {
    this.htmlTag.classList.toggle('dark')
  }
}

export const Views_Global_DarkmodeComponent = () => {
  return (
    Tab({controller: "views--global--darkmode", klass: 'flex justify-center items-center w-fit h-fit cursor-pointer', action: {listener: 'click', action: 'tabNext'}}, () => (
      `
        <div>${Icon({variant: ['outline', 'moon']})}</div>
        <div>${Icon({variant: ['outline', 'sun']})}</div>
      `
    ))
  )
}