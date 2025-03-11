import { identifier } from "controllers/education/helpers/data_helpers"
import Education_LayoutController from "controllers/education/layout_controller"

export default class Education_Educations_HomeController extends Education_LayoutController {

  static targets = ['header', 'main', 'aside', 'content', 'footer', 'table']

  initLayout() {
    this.element.className = 'w-full h-full flex flex-col justify-center items-center'
    this.element.innerHTML = this.layoutHTML()
  }

  layoutHTML() {
    return `
      <header class="flex flex-row w-full h-full" data-${this.identifier}-target="header" data-controller="${identifier(this.headerController)}"></header>
      <main class="relative flex flex-row w-full" data-${this.identifier}-target="main">
        <article class="w-full h-full" data-${this.identifier}-target="content">   
        </article>
      </main>
      <footer class="flex flex-row w-full h-full justify-between items-center py-4 px-20 mt-4 border-t-2" data-${this.identifier}-target="footer" data-controller="${identifier(this.footerController)}"></footer>
    `
  }

  contentHTML() {
    return this.serverHTML
  }

}