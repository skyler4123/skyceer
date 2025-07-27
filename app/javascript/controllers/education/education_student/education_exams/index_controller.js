import Education_EducationOwner_EducationExams_IndexController from "controllers/education/education_owner/education_exams/index_controller";
import Education_EducationStudent_AsideController from "controllers/education/education_student/aside_controller";

export default class extends Education_EducationOwner_EducationExams_IndexController {

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationStudent_AsideController
  }

}