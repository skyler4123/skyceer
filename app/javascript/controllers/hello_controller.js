import { Controller } from "@hotwired/stimulus"


export default class extends Controller {

  initialize() {
    
  }

  flash({ detail: { content } }) {
    console.log(content) // 1234
  }
}
