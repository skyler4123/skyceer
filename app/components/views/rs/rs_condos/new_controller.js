import RsCondosLayoutController from "../layout_component_controller";

export default class extends RsCondosLayoutController {
  connect() {
    console.log("Hello, Stimulus!", this.element);
  }
}
