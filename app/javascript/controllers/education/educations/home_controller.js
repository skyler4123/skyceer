// import ApplicationController from "../../application_controller"
import Education_FooterController from "../footer_controller"
import Education_HeaderController from "../header_controller"
import Education_LayoutController from "../layout_controller"

export default class extends Education_LayoutController {

  initLayout() {
    this.element.className = 'w-full h-fulll'
    this.element.innerHTML = this.layoutHTML()
  }

  layoutHTML() {
    return `
    <header class="flex flex-row w-full h-full" data-${this.identifier}-target="header" data-controller="${Education_HeaderController.identifier}"></header>
    <main class="relative flex flex-row w-full h-full" data-${this.identifier}-target="main">
      ${this.contentTarget.outerHTML}
    </main>
    <footer class="flex flex-row w-full h-full justify-between items-center py-4 px-20 mt-4 border-t-2" data-${this.identifier}-target="footer" data-controller="${Education_FooterController.identifier}"></footer>
    `
  }
}
