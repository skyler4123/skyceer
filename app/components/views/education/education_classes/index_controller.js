import Views_Education_LayoutController from "../layout_controller";

export default class extends Views_Education_LayoutController {
  connect() {
    console.log("Hello, Stimulus!", this.element);
  }
}
