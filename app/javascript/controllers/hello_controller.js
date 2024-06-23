import { Controller } from "@hotwired/stimulus"
import { CarConstants } from "./constants/vehicle/car_constants"
export default class extends Controller {

  initialize() {
    console.log(CarConstants)
  }


}
