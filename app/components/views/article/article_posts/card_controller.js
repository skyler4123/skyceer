import ApplicationController from "../../../../javascript/controllers/application_controller";

export default class Views_Article_ArticlePosts_CardController extends ApplicationController {
  static targets = ["image", "title", "content"]
  static values = {
    class: { type: String, default: "w-full h-full p-4 h-64" },
    imageUrl: { type: String, default: "" },
    title: { type: String, default: "" },
    content: { type: String, default: "" },
    url: { type: String, default: "" }
  }

  init() {
    this.initHTML()
  }

  initHTML() {
    this.element.innerHTML = this.defaultHTML()
  }

  defaultHTML() {
    return `
      <a href="${this.urlValue}" class="w-full h-full flex flex-col items-center shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div class="w-1/2 h-full flex justify-center items-center">
            <img class="w-full h-full object-cover rounded-lg" src="${this.imageUrlValue}" alt="">
          </div>
          <div class="w-1/2 flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${this.titleValue}</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${this.contentValue}</p>
          </div>
      </a>
    `
  }
  connect() {
    console.log("Hello, Stimulus!", this);
  }
}
