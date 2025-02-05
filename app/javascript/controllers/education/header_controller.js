import ApplicationController from "../application_controller";
import { CookieHelpers } from "../helpers/cookie_helpers";
import Education_AvatarController from "./avatar_controller";
import Education_UserProfileDropdownController from "./user_profile_dropdown_controller";

export default class Education_HeaderController extends ApplicationController {
  init() {
    this.initHTML()
  }

  initHTML() {
    this.element.innerHTML = this.defaultHTML()
  }

  defaultHTML() {
    return `
      <div class="flex flex-row justify-between items-center w-full px-4 py-4 border-b-2">
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
          <a href="/educations">Education</a>
        </div>
        <div class="flex flex-row" data-controller="${Education_UserProfileDropdownController.identifier}"></div>
      </div>
    `
  }
}
