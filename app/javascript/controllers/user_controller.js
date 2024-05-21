import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="user"
export default class UserController extends Controller {

  initialize() {
    console.log('Hello Stimulus! from UserController')
  }
  
  email() {
    return document.cookie['email']
  }

  name() {
    return document.cookie['name']
  }
}
