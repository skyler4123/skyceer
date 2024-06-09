import ApplicationController from "../../../../javascript/controllers/application_controller";
import { editorjs } from "../../../../javascript/controllers/components";
import { footer } from "../footer";
import { header } from "../header";

export default class extends ApplicationController {
  static targets = ['header', 'main', 'footer']

  // initialize() {
  //   // console.log(this)
  // }
  init() {
    console.log(this)
    this.element.className = 'w-full h-full'
    this.initHeader()
    this.initMain()
    this.initFooter()
  }

  initHeader() { this.headerTarget.innerHTML = header() }
  initFooter() { this.footerTarget.innerHTML = footer() }


  initMain() {
    this.mainTarget.className = 'flex flex-col justify-center items-center w-full h-full'
    this.mainTarget.innerHTML =
      `
        ${editorjs({klass: 'w-full h-full'}, () => {
          return `
            <div class="my-5">
              <label for="review_article_title">Title</label>
              <input class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full" type="text" name="review_article[title]" id="review_article_title">
            </div>

            <div class="my-5 border-2 border-gray-950">
              <label for="review_article_content">Content</label>
              <div data-libs--editorjs-target="editor"></div>
            </div>


            
            <div class="inline">
              <input type="submit" name="commit" value="Create Review article" class="rounded-lg py-3 px-5 bg-blue-600 text-white inline-block font-medium cursor-pointer" data-disable-with="Create Review article">
            </div>
            
          `
        })}

      `
  }
  

}
