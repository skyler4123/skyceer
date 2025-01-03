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
    if (this.isSignedIn()) { this.initSignedInDropdown() }
  }

  initHTML() {
    if (this.isSignedIn()) {
      this.element.innerHTML = this.signedInHTML()
    } else {
      this.element.innerHTML = this.notSignedInHTML()
    }
  }

  initSignedInDropdown() {
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

  isSignedIn() {
    return !!CookieHelpers.email()
  }

  dropdownHTML() {
    return `
      <ul class="bg-gray-100 text-2xl">
        <li><a href="/users/${CookieHelpers.id()}">${CookieHelpers.name()}</a></li>
        <li><a href="/sign_out">Sign Out</a></li>
      </ul>
    `
  }

  signedInHTML() {
    return `
      <div
        data-controller="${Education_AvatarController.identifier}"
        data-${this.identifier}-target="avatar">
      </div>
    `
  }

  notSignedInHTML() {
    return `
      <a href="/sign_in">Sign In</a>
    `
  }
}