import Education_LayoutController from "../../layout_controller";

export default class extends Education_LayoutController {
  static values = {
    class: { type: Object, default: {
      content: "w-full"
    } }
  }
  // connect() {
  //   console.log("Hello, Stimulus!", this);
  // }

}
