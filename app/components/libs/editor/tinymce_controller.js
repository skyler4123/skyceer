import tinymce from "tinymce"
import ApplicationController from "../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  connect() {
    console.log("Hello, Stimulus!", tinymce);
    tinymce.init({
      selector: '#demo',
    });
  }
}
