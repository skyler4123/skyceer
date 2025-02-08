import { Controller } from "@hotwired/stimulus"

export default class Education_FooterController extends Controller {

  initialize() {
    this.element.className = "w-full"
    this.element.innerHTML = this.defaultHTML()
  }

  defaultHTML() {
    return `
      <div class="flex flex-row w-full h-full justify-between items-center py-4 px-20 mt-4 border-t-2">
        <div>Home</div>
        <div>Estate</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    `
  }
}