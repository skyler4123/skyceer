import Education_LayoutController from "controllers/education/layout_controller"
import Education_EducationTeacher_AsideController from "controllers/education/education_teacher/aside_controller"

export default class Education_EducationTeacher_LayoutController extends Education_LayoutController {

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationTeacher_AsideController
  }
}