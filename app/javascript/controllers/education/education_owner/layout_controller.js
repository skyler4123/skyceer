import Education_EducationOwner_AsideController from "controllers/education/education_owner/aside_controller"
import { identifier } from "controllers/data_helpers"
import Education_LayoutController from "controllers/education/layout_controller"

export default class Education_EducationOwner_LayoutController extends Education_LayoutController {
  static targets = ['header', 'main', 'aside', 'content', 'footer', 'table']

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationOwner_AsideController
  }

}