
import PaginationController from "controllers/pagination_controller";
import ChoicesController from "controllers/choices_controller";
import TableController from "controllers/table_controller"
import FlashController from "controllers/flash_controller";
import ModalController from "controllers/modal_controller";
import HeaderController from "controllers/header_controller";
import FooterController from "controllers/footer_controller";
import LayoutController from "controllers/layout_controller";

export default class ArticleLayoutController extends LayoutController {
  static targets = ['header', 'main', 'aside', 'content', 'footer'];
  static values = {
    data: { type: Object, default: {} },
    flash: { type: Object, default: {} },
    pagination: { type: Object, default: {} },
  };
  static outlets = ['flash', 'modal'];

  initBinding() {
    this.headerController = HeaderController
    this.footerController = FooterController
    this.paginationController = PaginationController
    this.paginationData = JsonData.pagination
    this.selectController = ChoicesController
    this.choicesController = ChoicesController
    this.tableController = TableController
    this.flashController = FlashController
    this.modalController = ModalController
    this.flashValue = JsonData.flash || {}
    this.paginationValue = JsonData.pagination || {}
  }

  initOutlets() {
    this.element.setAttribute(`data-${this.identifier}-${this.flashController.identifier}-outlet`, "body");
    this.element.setAttribute(`data-${this.identifier}-${this.modalController.identifier}-outlet`, "body");
  }


  init() {
    this.initLayout();
  }

  initLayout() {
    this.element.className = 'w-full h-full bg-white dark:bg-gray-900 text-black dark:text-white';
    this.element.innerHTML = this.layoutHTML();
  }

  layoutHTML() {
    return `
      <header class="flex flex-row w-full h-full" data-${this.identifier}-target="header" data-controller="${this.headerController.identifier}"></header>
      <main class="relative flex flex-row w-full" data-${this.identifier}-target="main">
        <article class="w-full h-full" data-${this.identifier}-target="content">
          ${HTMLData}
        </article>
      </main>
      <footer class="flex flex-row w-full h-full justify-between items-center py-4 px-20 mt-4 border-t-2" data-${this.identifier}-target="footer" data-controller="${this.footerController.identifier}"></footer>
    `;
  }
}
