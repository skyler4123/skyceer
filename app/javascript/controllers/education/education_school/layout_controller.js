import Education_FooterController from "../footer_controller"
import Education_HeaderController from "../header_controller"
import Education_LayoutController from "../layout_controller"
import Education_EducationSchool_AsideController from "./aside_controller"

export default class Education_EducationSchool_LayoutController extends Education_LayoutController {

  layoutHTML() {
    return `
    <header class="flex flex-row w-full" data-${this.identifier}-target="header" data-controller="${Education_HeaderController.identifier}"></header>
    <main class="relative flex flex-row w-full" data-${this.identifier}-target="main">
      <aside class="open:flex w-1/4 h-screen bg-slate-800 pr-4 pl-4 pt-4" data-${this.identifier}-target="aside" data-controller="${Education_EducationSchool_AsideController.identifier}"></aside>
      <article class="w-full" data-${this.identifier}-target="content">
        ${this.ssrContentHTML()}
      </article>
    </main>
    <footer class="flex flex-row w-full justify-between items-center py-4 px-20 mt-4 border-t-2" data-${this.identifier}-target="footer" data-controller="${Education_FooterController.identifier}"></footer>
    `
  }

}
