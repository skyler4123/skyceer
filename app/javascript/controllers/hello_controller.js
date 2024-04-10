// import ApplicationController from './application_controller'
// export default class extends ApplicationController {

import Components from "./components"
import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  initialize() {
    console.log('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww')
    console.log(this.initHTML)
    this.element.innerHTML = this.initHTML
  }

  get initHTML() {
    return (
      Components('button', {label: 'Test Components', event: {id: '123', listener: 'click', action: 'toggle'}, variant: 'gradient_monochrome'}) +
      Components('button', {label: 'Test Components', event: {id: '123', listener: 'click', action: 'toggle'}, variant: 'gradient_monochrome'}) +
      Components('button', {label: 'Test Components', event: {id: '123', listener: 'click', action: 'toggle'}, variant: 'gradient_monochrome'}) +
      Components('button', {label: 'Test Components', event: {id: '123', listener: 'click', action: 'toggle'}, variant: 'gradient_monochrome'})
    )
  }
}
