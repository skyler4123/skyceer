import Education_FooterController from "controllers/education/footer_controller"
import Education_HeaderController from "controllers/education/header_controller"
import ApplicationController from "controllers/application_controller"
import { identifier } from "controllers/helpers/data_helpers"

export default class Education_Educations_HomeController extends ApplicationController {

  static targets = ['header', 'main', 'aside', 'content', 'footer', 'table']

  initLayout() {
    this.element.className = 'w-full h-full flex flex-col justify-center items-center'
    this.element.innerHTML = this.layoutHTML()
  }

  layoutHTML() {
    return `
      <header class="flex flex-row w-full h-full" data-${this.identifier}-target="header" data-controller="${identifier(Education_HeaderController)}"></header>
      <main class="relative flex flex-row w-full" data-${this.identifier}-target="main">
        <article class="w-full h-full" data-${this.identifier}-target="content">   
        </article>
      </main>
      <footer class="flex flex-row w-full h-full justify-between items-center py-4 px-20 mt-4 border-t-2" data-${this.identifier}-target="footer" data-controller="${identifier(Education_FooterController)}"></footer>
    `
  }

  contentHTML() {
    return this.serverHTML
  }

}