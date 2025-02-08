import { csrfToken } from "../../../helpers/data_helpers";
import Education_EducationSchool_LayoutController from "../layout_controller";

export default class extends Education_EducationSchool_LayoutController {

  contentHTML() {
    return this.serverHTML
  }

}