import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  initialize() {
    this.element.dataset.action = (this.element.dataset.action || "") + ' ' + `global:dispatch@window->${this.identifier}#globalDispatch`
  }

  globalDispatch({ detail: { event } }) {
    if (this.element.id != payload.id) { return }
    eval(`this.${payload.action}(payload)`)
  }

  complete(payload) {
    // const that = payload.controller
    // console.log(payload)
    // that.element.classList.add('text-red-800')
  }

  connect() {
    // console.log(this)
  }
  hover() {
    // console.log(this.nameValue)
  }
}
