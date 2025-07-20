import Education_EducationSchool_EducationExams_IndexController from "controllers/education/education_owner/education_exams/index_controller";
import Education_EducationTeacher_AsideController from "controllers/education/education_teacher/aside_controller";

export default class extends Education_EducationSchool_EducationExams_IndexController {

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationTeacher_AsideController
  }

}