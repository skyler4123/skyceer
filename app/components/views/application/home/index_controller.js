import { CookieHelpers } from "../../../../javascript/controllers/cookie_helpers";
import Views_Education_LayoutController from "../../education/layout_controller";

export default class extends Views_Education_LayoutController {
  connect() {
    console.log(CookieHelpers)
    console.log("Hello, Stimulus!", this.element);
  }
}
