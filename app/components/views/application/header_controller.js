import ApplicationController from "../../../javascript/controllers/application_controller";
import { CookieHelpers } from "../../../javascript/controllers/cookie_helpers";

export default class extends ApplicationController {
  static values = {
    class: { type: String, default: 'flex flex-row w-full h-full' }
  }
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
      <div class="flex flex-row justify-between items-center w-full h-full px-4 py-4 border-b-2">
        <div data-controller="views--application--logo"></div>
        <div class="flex flex-row gap-x-2">
          <a href="/education_students/${CookieHelpers.id()}/education_schools">School</a>
        </div>
        <div class="flex flex-row">
          <div data-controller="views--application--darkmode"></div>
          ${CookieHelpers.email() ? 
            `<a href="/users/${CookieHelpers.id()}">${CookieHelpers.name()}</a>`
            :
            `<a href="/sign_in">Sign In</a>`
          }
      </div>
    </div>
    `
  }
}
