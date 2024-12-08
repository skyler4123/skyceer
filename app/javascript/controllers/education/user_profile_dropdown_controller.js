import ApplicationController from "../application_controller";
import { CookieHelpers } from "../helpers/cookie_helpers";
import Education_AvatarController from "./avatar_controller";

// Connects to data-controller="education--user-profile-dropdown"
export default class Education_UserProfileDropdownController extends ApplicationController {
  static targets = ["avatar"]
  static values = {
    head: { type: String, default: `<script src="https://unpkg.com/@popperjs/core@2"></script><script src="https://unpkg.com/tippy.js@6"></script>` }
  }

  init() {
    this.initHTML()
    this.initDropdown()
  }

  initHTML() {
    this.element.innerHTML = `
     <img
      ${Education_AvatarController.identifier}
      class="w-10 h-10 rounded-full"
      data-${this.identifier}-target="avatar">
    </img>
    `
  }

  initDropdown() {
    tippy(this.avatarTarget, {
      duration: 0,
      arrow: true,
      // delay: [1000, 200],
      theme: 'light',
      content: this.dropdownHTML(),
      interactive: true,
      allowHTML: true,
      trigger: 'click',
    });
  }

  dropdownHTML() {
    return `
      <ul class="bg-red-500 text-2xl">
        <li><a href="/users/${CookieHelpers.id()}">${CookieHelpers.name()}</a></li>
        <li><a href="/sign_out">Sign Out</a></li>
      </ul>
    `
  }
}