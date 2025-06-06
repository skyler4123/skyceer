import Education_FooterController from "controllers/education/footer_controller"
import Education_HeaderController from "controllers/education/header_controller"
import { identifier } from "controllers/education/helpers/data_helpers"
import Education_PaginationController from "controllers/education/pagination_controller";
import Education_ChoicesController from "controllers/education/choices_controller";
import Education_TableController from "controllers/education/table_controller"
import ApplicationController from "controllers/application_controller"
import Education_FlashController from "controllers/education/flash_controller";
import Education_ModalController from "controllers/education/modal_controller";

export default class Education_LayoutController extends ApplicationController {
  static targets = ['header', 'main', 'aside', 'content', 'footer', 'table']
  static values = {
    pagination: { type: Object, default: {} },
    flash: { type: Object, default: {} },
    data: { type: Object, default: {} },
  }
  static outlets = ['education--flash', 'education--modal']

  initializeOutlets() {
    Education_ModalController
    this.element.setAttribute(`data-${this.identifier}-${Education_FlashController.identifier}-outlet`, "body")
    this.element.setAttribute(`data-${this.identifier}-${Education_ModalController.identifier}-outlet`, "body")
  }

  initBinding() {
    this.serverHTML = this.element.innerHTML
    this.headerController = Education_HeaderController
    this.footerController = Education_FooterController
    this.paginationController = Education_PaginationController
    this.paginationData = ServerData.pagination
    this.choicesControllerIdentifier = identifier(Education_ChoicesController)
    this.choicesController = Education_ChoicesController
    this.tableController = Education_TableController
    this.flashValue = ServerData.flash || {}
    this.paginationValue = ServerData.pagination || {}
  }

  initLayout() {
    this.element.className = 'w-full h-full bg-white dark:bg-gray-900 text-black dark:text-white'
    this.element.innerHTML = this.layoutHTML()
  }

  layoutHTML() {
    return `
    <header class="flex flex-row w-full h-full" data-${this.identifier}-target="header" data-controller="${identifier(this.headerController)}"></header>
    <main class="relative flex flex-row w-full" data-${this.identifier}-target="main">
      <aside class="open:flex w-1/4 h-screen bg-slate-800 pr-4 pl-4 pt-4" data-${this.identifier}-target="aside" data-controller="${identifier(this.asideController)}"></aside>
      <article class="w-full h-full" data-${this.identifier}-target="content">   
      </article>
    </main>
    <footer class="flex flex-row w-full h-full justify-between items-center py-4 px-20 mt-4 border-t-2" data-${this.identifier}-target="footer" data-controller="${identifier(this.footerController)}"></footer>
    `
  }
}