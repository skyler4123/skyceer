import Education_EducationStudent_AsideController from "controllers/education/education_student/aside_controller";
import Education_EducationSchool_EducationTeachers_IndexController from "controllers/education/education_owner/education_teachers/index_controller";

export default class extends Education_EducationSchool_EducationTeachers_IndexController {

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationStudent_AsideController
  }

}