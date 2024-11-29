import ApplicationController from "../application_controller";
import { CookieHelpers } from "../helpers/cookie_helpers";

export default class extends ApplicationController {
  static values = {
    class: { type: String, default: 'flex flex-row w-full h-full' }
  }

  init() {
    this.initHTML()
  }

  initHTML() {
    this.element.innerHTML = this.defaultHTML()
  }

  defaultHTML() {
    return `
      <div class="flex flex-row justify-between items-center w-full h-full px-4 py-4 border-b-2">
        <div>
          <a href="/education_schools">
            <div class="flex flex-row gap-x-2 justify-center items-center">
              <svg data-controller="svg" data-svg-params-value="${this.transferToValue({variant: ["solid", "sparkles"]})}" class="h-10 w-10 bg-red-500 text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"></svg>
              <div>Skyceer</div>
            </div>
          </a>
        </div>
        <div class="flex flex-row gap-x-2">
          <a href="/"">Home</a>
          <a href="/education_houses">Academic</a>
          <a href="/educatione_posts">Teacher</a>
          <a href="/educatione_posts">Student</a>
          <a href="/educatione_posts">Contact</a>
        </div>
        <div class="flex flex-row">
          ${Global_DarkmodeComponent()}
          <a href="/users/${CookieHelpers.id()}">${CookieHelpers.name()}</a>
      </div>
    </div>
    `
  }
}
