// import { Controller } from "@hotwired/stimulus"
import ApplicationController from "./application_controller"

// Connects to data-controller="user"
export default class CookieController extends ApplicationController {

  initialize() {
    // console.log('Hello Stimulus! from UserController')
  }
  
  email() {
    return this.getCookie('email')
  }

  name() {
    return this.getCookie('name')
  }
}
