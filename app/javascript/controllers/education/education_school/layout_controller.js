import Education_FooterController from "../footer_controller"
import Education_HeaderController from "../header_controller"
import Education_EducationSchool_AsideController from "./aside_controller"
import { identifier } from "../../helpers/data_helpers"
import ApplicationController from "../../application_controller"

export default class Education_EducationSchool_LayoutController extends ApplicationController {
  static targets = ['header', 'main', 'aside', 'content', 'footer']

  initLayout() {
    this.element.className = 'w-full h-full'
    this.element.innerHTML = this.layoutHTML()
  }

  layoutHTML() {
    return `
    <header class="flex flex-row w-full h-full" data-${this.identifier}-target="header" data-controller="${identifier(Education_HeaderController)}"></header>
    <main class="relative flex flex-row w-full" data-${this.identifier}-target="main">
      <aside class="open:flex w-1/4 h-screen bg-slate-800 pr-4 pl-4 pt-4" data-${this.identifier}-target="aside" data-controller="${identifier(Education_EducationSchool_AsideController)}"></aside>
      <article class="w-full h-full" data-${this.identifier}-target="content">   
      </article>
    </main>
    <footer class="flex flex-row w-full h-full justify-between items-center py-4 px-20 mt-4 border-t-2" data-${this.identifier}-target="footer" data-controller="${identifier(Education_FooterController)}"></footer>
    `
  }
}