import { Controller } from "@hotwired/stimulus";

export default class Education_LogoController extends Controller {
  static values = {
    name: { type: String, default: "Skyler" },
    url: { type: String, default: "/" },
  }
  initialize() {
    this.element.innerHTML = this.defaultHTML()
  }
  defaultHTML() {
    return `
      <a href="${this.urlValue}" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo">
        ${this.nameValue.length > 0 &&
          `<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ${this.nameValue}
          </span>`
        }
      </a>
    `
  }
}
