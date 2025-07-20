import Education_EducationOwner_EducationExams_IndexController from "controllers/education/education_owner/education_exams/index_controller";
import Education_EducationAdmin_AsideController from "controllers/education/education_admin/aside_controller";

export default class extends Education_EducationOwner_EducationExams_IndexController {

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationAdmin_AsideController
  }

}