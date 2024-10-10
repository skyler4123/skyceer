import { icon, link } from "../../../javascript/controllers/components"
import { Views_Global_DarkmodeComponent } from "../global/darkmode_controller"
import ApplicationController from "../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  init() {
    this.initHTML()
  }

  initHTML() {
    this.element.innerHTML = this.defaultHTML()
  }

  defaultHTML() {
    return `
      <div class="flex flex-row justify-between w-full h-full py-5 px-10">
        <div>
          ${link({url: "/"}, () => {
            return `
              <div class="flex flex-row gap-x-2 justify-center items-center">
                ${icon({variant: ["solid", "sparkles"], klass: "h-10 w-10 bg-red-500 text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"})}
                <div>Skyceer</div>
              </div>
            `
          })}
        </div>
        <div class="flex flex-row gap-x-2">
          <div>${link({label: 'Condominium', url: "/estate_condos"})}</div>
          <div>${link({label: 'Hotel', url: "/estate_hotels"})}</div>
          <div>${link({label: 'House', url: "/estate_houses"})}</div>
        </div>
        <div class="flex flex-row">
          ${Views_Global_DarkmodeComponent()}
          Authentication
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
    `
  }
}
