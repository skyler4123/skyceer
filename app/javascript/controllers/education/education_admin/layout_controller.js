import { identifier } from "controllers/data_helpers"
import Education_LayoutController from "controllers/education/layout_controller"
import Education_EducationAdmin_AsideController from "controllers/education/education_admin/aside_controller"

export default class Education_EducationAdmin_LayoutController extends Education_LayoutController {
  static targets = ['header', 'main', 'aside', 'content', 'footer', 'table']

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationAdmin_AsideController
  }

}