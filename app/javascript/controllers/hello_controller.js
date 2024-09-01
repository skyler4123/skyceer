import "jquery"
import "select2"
import { Controller } from "@hotwired/stimulus"
export default class extends Controller {

  initialize() {
    console.log($)

    $('#cars').select2();


  }
}
