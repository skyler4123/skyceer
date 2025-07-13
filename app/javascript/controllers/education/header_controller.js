import { isSignedIn, educationRole, avatarHTML, openPopover } from "controllers/education/helpers/data_helpers"
import ApplicationController from "controllers/application_controller"
import { Cookie } from "controllers/education/helpers/data_helpers"
import Education_DarkmodeController from "controllers/education/darkmode_controller"
import { identifier } from "controllers/education/helpers/data_helpers"
import Education_LogoController from "controllers/education/logo_controller"
export default class Education_HeaderController extends ApplicationController {
  static targets = ["profile"]
  
  initialize() {
    this.reset()
    this.element.className = "flex flex-row w-full"
    this.element.innerHTML = this.defaultHTML()
  }

  openPopoverProfile(event) {
    if (!isSignedIn()) return
    const target = event.currentTarget
    openPopover({
      parentElement: target,
      html: this.popoverProfileHTML(),
      position: 'bottom-left',
      popupClass: 'bg-white !border !border-gray-200 !w-75 -translate-x-full'
    })
  }

  disconnect() {
    this.element.remove()
  }

  defaultHTML() {
    return `
      <div class="flex flex-row justify-between items-center w-full h-full px-4 py-4 border-b-2">
        <div>
          <a href="/">
            <div class="flex flex-row gap-x-2 justify-center items-center">
              <div class="flex flex-row w-12 h-12 z-50" data-controller="${identifier(Education_LogoController)}"></div>
              <div role="product-name">Skyceer</div>
            </div>
          </a>
        </div>
        <div class="flex flex-row gap-x-2">
          ${this.headerNavigationHTML()}
        </div>
        <div class="flex flex-row justify-center items-center gap-x-2">
          <div class="flex flex-row" data-controller="${identifier(Education_DarkmodeController)}"></div>
          <div 
            role="profile"
            data-${this.identifier}-target="profile"
            data-action="click->${this.identifier}#openPopoverProfile"
            class="cursor-pointer"
          >
            ${isSignedIn() ? avatarHTML() : `<a href="/sign_in">Sign In</a>`}
          </div>
        </div>
      </div>
    `
  }

  popoverProfileHTML() {
    return `
      <div class="flex flex-col gap-y-2 p-2 w-full">
        <div>${Cookie("name")}</div>
        <a href="/users/${Cookie("id")}/profile">Profile</a>
        <a href="/sign_out">Sign Out</a>
      </div>
    `
  }

  headerNavigationHTML() {
    const educationRole = Cookie("education_role")
    switch (educationRole) {
      case "education_school":
        return `
          <a href="/">Home</a>
          <a href="/education_schools">My Education</a>
        `
      case "education_student":
        return `
          <a href="/">Home</a>
          <a href="/education_schools">My Education</a>
        `
      case "education_teacher":
        return `
          <a href="/">Home</a>
          <a href="/education_schools">My Education</a>

        `
      case "education_admin":
        return `
          <a href="/">Home</a>
          <a href="/education_schools">My Education</a>
        `
      default:
        return `
          <a href="/">Home</a>
        `
    }
  }
}