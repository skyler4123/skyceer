import ApplicationController from "../application_controller"

export default class Education_PaginationController extends ApplicationController {
  static targets = ["link"]
  static values = {
    additionalParams: { type: Object, default: {} },
  }
  
  init() {
    this.initTargets()
  }

  initTargets() {
    this.element.querySelectorAll("a[href]").forEach((link) => {
      link.setAttribute(`data-${this.identifier}-target`, "link")
    })
  }

  additionalParamsValueChanged(value, previousValue) {
    this.linkTargets.forEach((link) => {
      const linkObject = new URL(link.href)
      Object.entries(this.additionalParamsValue).forEach(([key, value]) => {
        linkObject.searchParams.set(key, value)
      })
      link.href = linkObject.href
      // link.href += `?${new URLSearchParams(this.additionalParamsValue).toString()}`
    })
  }
}


