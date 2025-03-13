import Education_LayoutController from "controllers/education/layout_controller"
import Education_EducationStudent_AsideController from "controllers/education/education_student/aside_controller"

export default class Education_EducationStudent_LayoutController extends Education_LayoutController {

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationStudent_AsideController
  }
}