import ApplicationController from "../../application_controller"
// import Education_LayoutController from "../layout_controller"

// Connects to data-controller="education--home--index"
export default class extends ApplicationController {
  static targets = ['header', 'main', 'aside', 'content', 'footer']
  static values = {
    class: { type: Object, default: {
      element: "w-full",
      content: "w-full"
    } }
  }

  init() {
    this.initHeader()
    this.initFooter()
    if (this.hasMainTarget && this.isDefined(this.initMain)) { this.initMain() }
    // if (this.hasAsideTarget && this.isDefined(this.initAside)) { this.initAside() }
    if (this.hasContentTarget && this.isDefined(this.initContent)) { this.initContent() }
  }

  initHeader() {
    this.headerTarget.setAttribute('data-controller', "education--header")
  }
  initMain() {
    this.mainTarget.setAttribute('data-controller', "education--main")
  }
  initAside() {
    this.asideTarget.setAttribute('data-controller', "education--aside")
  }
  initFooter() {
    this.footerTarget.setAttribute('data-controller', "education--footer")
  }

}
