import Education_EducationSchool_LayoutController from "controllers/education/education_school/layout_controller";
import { openPopover } from "controllers/education/helpers/data_helpers";
import { isEmpty } from "controllers/education/helpers/data_helpers";

export default class extends Education_EducationSchool_LayoutController {
  static targets = ["schoolSelect", "categorySelect"]

  contentHTML() {
    return this.serverHTML
  }

}