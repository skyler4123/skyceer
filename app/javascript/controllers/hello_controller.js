import { Controller } from "@hotwired/stimulus"
import { accordion, button } from '../../components/components';

export default class extends Controller {
  initialize() {
    // console.log("Hello, Stimulus!", this.element);
    const newHTML = button({label: 'Press Button', events: [{ id: 'test', listener: 'click', action: 'toggle' }]}, () => {
      return accordion({ event: { id: 'test' } }, () => {
        return `<div>Test Components at FE</div>`
      })
    })
    console.log(newHTML)
    this.element.innerHTML = newHTML
  }
  
}
