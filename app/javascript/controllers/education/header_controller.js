import { Controller } from "@hotwired/stimulus"

export default class Education_HeaderController extends Controller {
  
  initialize() {
    this.element.className = "flex flex-row w-full"
    this.element.innerHTML = this.defaultHTML()
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
          <a href="/educations">Education</a>
        </div>
        <div class="flex flex-row" data-controller="education--user-profile-dropdown"></div>
      </div>
    `
  }
}