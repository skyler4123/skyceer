// import { Controller } from "@hotwired/stimulus";
import ApplicationController from "../../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  static targets = ['coordinateInput', 'map']
  // static values = [
  //   coordinates = { type: Object }
  // ]

  initAction() {
    console.log(this)
    this.addAction(this.coordinateInputTarget, `input->${this.identifier}#inputCoordinate`)
    this.addAction(this.mapTarget, `click->${this.identifier}#sync`)
  }

  inputCoordinate(event) {
    console.log(event)
  }

  sync() {
    setTimeout(() => {
      this.coordinateInputTarget.value = this.mapController().pointValue.coordinates
    }, 300)
  }

  mapController() {
    return this.application.getControllerForElementAndIdentifier(this.mapTarget, 'libs--openlayers--point')
  }

  connect() {
    // console.log("Hello, Stimulus!", this.coordinateInputTarget);
  }
}
