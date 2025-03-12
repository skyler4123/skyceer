import { identifier } from "controllers/education/helpers/data_helpers"
import Education_LayoutController from "controllers/education/layout_controller"
import Education_EducationAdmin_AsideController from "controllers/education/education_admin/aside_controller"

export default class Education_EducationAdmin_LayoutController extends Education_LayoutController {
  static targets = ['header', 'main', 'aside', 'content', 'footer', 'table']

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationAdmin_AsideController
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