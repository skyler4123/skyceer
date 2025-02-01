import ApplicationController from "../application_controller"
import Education_FooterController from "./footer_controller"
import Education_HeaderController from "./header_controller"

export default class Education_LayoutController extends ApplicationController {
  static targets = ['header', 'main', 'aside', 'content', 'footer']

  initLayout() {
    this.element.className = 'w-full h-fulll'
    this.element.innerHTML = this.layoutHTML()
  }

  layoutHTML() {
    return `
    <header class="flex flex-row w-full h-full" data-${this.identifier}-target="header" data-controller="${Education_HeaderController.identifier}"></header>
    <main class="relative flex flex-row w-full h-full" data-${this.identifier}-target="main">
      <aside class="open:flex w-1/4 h-screen bg-slate-800 pr-4 pl-4 pt-4" data-${this.identifier}-target="aside" data-controller="${Education_EducationSchool_AsideController.identifier}"></aside>
      <article class="w-full h-full" data-${this.identifier}-target="content">
        ${this.ssrContentHTML()}
      </article>
    </main>
    <footer class="flex flex-row w-full h-full justify-between items-center py-4 px-20 mt-4 border-t-2" data-${this.identifier}-target="footer" data-controller="${Education_FooterController.identifier}"></footer>
    `
  }

  ssrContentHTML() {
    return this.element.innerHTML
  }
}
