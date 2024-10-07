import Views_Estate_LayoutController from "../layout_controller";

export default class extends Views_Estate_LayoutController {
  connect() {
    console.log("Hello, Stimulus!", this.element);
  }
}
