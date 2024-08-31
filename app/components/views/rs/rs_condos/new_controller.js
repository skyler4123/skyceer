import Views_Rs_LayoutController from "../layout_controller";

export default class extends Views_Rs_LayoutController {
  connect() {
    console.log("Hello, Stimulus!", this.element);
  }
}
