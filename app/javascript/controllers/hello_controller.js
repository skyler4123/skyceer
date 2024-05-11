import { Controller } from "@hotwired/stimulus"
import { button, tab } from "./components"

export default class extends Controller {
  initialize() {
    console.log('Hello Stimulus!')
    this.element.innerHTML = this.initHTML
  }




  get initHTML() {
    return (
      tab({action: { listener: 'click', action: 'tab_next' }, restoreTimeout: 10000, restoreIndex: 0 }, () => {
        return `
          <div>${button({label: 'Copy', variant: 'pill'})}</div>
          <div>${button({label: 'Copied', variant: 'pill'})}</div>
        `
      })
    )
  }












  // get initHTML() {
  //   return (
  //     Components('button', {label: 'Test Components', event: {id: '123', listener: 'click', action: 'toggle'}, variant: 'gradient_monochrome'}) +
  //     Components('button', {label: 'Test Components', event: {id: '123', listener: 'click', action: 'toggle'}, variant: 'gradient_monochrome'}) +
  //     Components('button', {label: 'Test Components', event: {id: '123', listener: 'click', action: 'toggle'}, variant: 'gradient_monochrome'}) +
  //     Components('button', {label: 'Test Components', event: {id: '123', listener: 'click', action: 'toggle'}, variant: 'gradient_monochrome'})
  //   )
  // }
}
