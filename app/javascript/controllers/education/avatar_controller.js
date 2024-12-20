import ApplicationController from "../application_controller"
import { CookieHelpers } from "../helpers/cookie_helpers"

// Connects to data-controller="education--avatar"
export default class Education_AvatarController extends ApplicationController {
  init() {
    // console.log(this)
    this.element.src = CookieHelpers.avatar()
  }
}
