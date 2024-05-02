import ApplicationController from './application_controller'
export default class extends ApplicationController {
  initialize() {
    // this.addAction(this.element, `click->${this.identifier}#demo`)
  }

  demo(event) {
    console.log(event)
    const [clientX, clientY] = this.getClientXYFrom({event: event})
    console.log(clientX) 
  }

}
