import Education_EducationTeacher_AsideController from "controllers/education/education_teacher/aside_controller";
import Education_EducationSchool_EducationTeachers_IndexController from "controllers/education/education_owner/education_students/index_controller";

export default class extends Education_EducationSchool_EducationTeachers_IndexController {

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationTeacher_AsideController
  }

}