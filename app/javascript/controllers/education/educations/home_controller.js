import { Controller } from "@hotwired/stimulus"
import { Cookie } from "controllers/helpers/data_helpers"

export default class Education_FooterController extends Controller {

  initialize() {
    
    console.log("Education_FooterController")
    console.log(Cookie)
  }

}