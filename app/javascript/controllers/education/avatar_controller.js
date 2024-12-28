import ApplicationController from "../application_controller"
import { CookieHelpers } from "../helpers/cookie_helpers"

// Connects to data-controller="education--avatar"
export default class Education_AvatarController extends ApplicationController {
  static values = {
    class: { type: Object, default: {
      element: "relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
    } }
   }
  init() {
    if (this.hasAvatar()) {
      this.element.innerHTML = this.avatarHTML()
    } else {
      this.element.innerHTML = this.anonymousAvatarHTML()
    }
  }

  hasAvatar() {
    return CookieHelpers.avatar().length > 0
  }

  avatarHTML() {
    const firstCharacter = this.firstCharacter()
    return `<img src="${CookieHelpers.avatar()}" alt="${firstCharacter}" class="w-10 h-10 rounded-full flex justify-center items-center" />`
  }

  anonymousAvatarHTML() {
    return `<svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>`
  }

  firstCharacter() {
    if (CookieHelpers.name().length === 0) {
      return "A"
    }
    return CookieHelpers.name().charAt(0).toUpperCase()
  }
}
