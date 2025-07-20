import Education_EducationSchool_AsideController from "controllers/education/education_owner/aside_controller"
import { identifier } from "controllers/education/helpers/data_helpers"
import Education_LayoutController from "controllers/education/layout_controller"

export default class Education_EducationSchool_LayoutController extends Education_LayoutController {
  static targets = ['header', 'main', 'aside', 'content', 'footer', 'table']

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationSchool_AsideController
  }

}