import Education_EducationSchool_EducationSubjects_IndexController from "controllers/education/education_school/education_subjects/index_controller";
import Education_EducationStudent_AsideController from "controllers/education/education_student/aside_controller";

export default class extends Education_EducationSchool_EducationSubjects_IndexController {

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationStudent_AsideController
  }

}