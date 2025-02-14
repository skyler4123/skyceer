import { Controller } from "@hotwired/stimulus"
import { isSignedIn } from "controllers/helpers/data_helpers"
import { avatarHTML } from "controllers/helpers/data_helpers"
import { openPopover } from "controllers/helpers/data_helpers"
import ApplicationController from "controllers/application_controller"
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
      position: 'bottom-left-left',
      popupClass: 'bg-white !border !border-gray-200 !w-75 -translate-x-full'
    })
  }

  defaultHTML() {
    return `
      <div class="flex flex-row justify-between items-center w-full h-full px-4 py-4 border-b-2">
        <div>
          <a href="/education_schools">
            <div class="flex flex-row gap-x-2 justify-center items-center">
              <div>Skyceer</div>
            </div>
          </a>
        </div>
        <div class="flex flex-row gap-x-2">
          <a href="/"">Home</a>
          <a class="text-blue-500" href="/educations">Education</a>
        </div>
        <div 
          data-${this.identifier}-target="profile"
          data-action="click->${this.identifier}#openPopoverProfile"
        >
          ${isSignedIn() ? avatarHTML() : `<a href="/sign_in">Sign In</a>`}
        </div>
      </div>
    `
  }

  popoverProfileHTML() {
    return `
      <div class="flex flex-col gap-y-2 p-2 w-full">
        <a href="/profile">Profile</a>
        <a href="/sign_out">Sign Out</a>
      </div>
    `
  }
}