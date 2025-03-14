// https://www.svgrepo.com/
import { Controller } from "@hotwired/stimulus"

export default class Education_AsideController extends Controller {

  initialize() {
    this.element.className = "flex w-1/4 h-screen bg-gray-800 pr-4 pl-4 pt-4"
    this.element.innerHTML = this.defaultHTML()
  }

  disconnect() {
    this.element.remove()
  }
  
  defaultHTML() {
    return `
      <ul class="w-full h-full flex flex-col justify-start">
        ${this.asideData().map((data) => {
          return `
            <li
              ${this.isCurrentPath(data.url) ? 
                'class="w-full pl-4 py-4 bg-gray-700 rounded-md"'
                :
                'class="w-full pl-4 py-4"'
              } 
            >
              <a class="group flex justify-start items-center"
                href="${data.url}">
                <div class="w-6 h-6 flex justify-center items-center mr-4">
                  ${data.icon}
                </div>
                <div class="text-gray-200 leading-6">${data.name}</div>
              </a>
            </li>
            <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700">
          `
        }).join("")}
      </ul>
    `
  }

  // get pathname from url
  pathname() {
    return window.location.pathname
  }

  // check an url whether matches/inside/included with the current pathname
  isCurrentPath(url) {
    return this.pathname().includes(url)
  }

}