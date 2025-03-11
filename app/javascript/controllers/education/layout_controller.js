import Education_FooterController from "controllers/education/footer_controller"
import Education_HeaderController from "controllers/education/header_controller"
import { identifier } from "controllers/education/helpers/data_helpers"
import Education_PaginationController from "controllers/education/pagination_controller";
import Education_ChoicesController from "controllers/education/choices_controller";
import ApplicationController from "controllers/application_controller"

export default class Education_LayoutController extends ApplicationController {
  static targets = ['header', 'main', 'aside', 'content', 'footer', 'table']

  initBinding() {
    this.serverHTML = this.element.innerHTML
    this.headerController = Education_HeaderController
    this.footerController = Education_FooterController
    this.paginationController = Education_PaginationController
    this.paginationData = ServerData.pagination
    this.choicesController = Education_ChoicesController
  }

  initLayout() {
    this.element.className = 'w-full h-full'
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
}