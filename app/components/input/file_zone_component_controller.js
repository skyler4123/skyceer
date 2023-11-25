import { v4 as uuidv4 } from 'uuid';
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus!", this.element);
  }
}
