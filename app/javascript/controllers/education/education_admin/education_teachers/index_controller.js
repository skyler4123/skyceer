import Education_EducationAdmin_AsideController from "controllers/education/education_admin/aside_controller";
import Education_EducationSchool_EducationTeachers_IndexController from "controllers/education/education_school/education_teachers/index_controller";

export default class extends Education_EducationSchool_EducationTeachers_IndexController {

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationAdmin_AsideController
  }

}