import { Icon, Link } from "../../../javascript/controllers/components"
import { Views_Global_DarkmodeComponent } from "../global/darkmode_controller"
import ApplicationController from "../../../javascript/controllers/application_controller";

export default class extends ApplicationController {

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
  }

  init() {
    this.initHTML()
  }

  initHTML() {
    this.element.innerHTML = this.defaultHTML()
  }

  defaultHTML() {
    return `
      <div class="flex flex-row justify-between items-center w-full h-full px-4 py-4 mb-4 border-b-2 shadow-lg shadow-gray-300">
        <div>
          ${Link({url: "/"}, () => {
            return `
              <div class="flex flex-row gap-x-2 justify-center items-center">
                ${Icon({variant: ["solid", "sparkles"], klass: "h-10 w-10 bg-red-500 text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"})}
                <div>Skyceer</div>
              </div>
            `
          })}
        </div>
        <div class="flex flex-row gap-x-2">
          <div>${Link({label: 'Home', url: "/"})}</div>
          <div>${Link({label: 'Admission', url: "/education_hotels"})}</div>
          <div>${Link({label: 'Academic', url: "/education_houses"})}</div>
          <div>${Link({label: 'Teacher', url: "/educatione_posts"})}</div>
          <div>${Link({label: 'Student', url: "/educatione_posts"})}</div>
          <div>${Link({label: 'Contact', url: "/educatione_posts"})}</div>


        </div>
        <div class="flex flex-row">
          ${Views_Global_DarkmodeComponent()}
          Authentication
      </div>
    </div>
    `
  }
  
  variantClass() {
    return {
      default: {
        element: 'flex flex-row w-full h-full'
      }
    }
  }
}
