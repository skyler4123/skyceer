import Education_EducationSchool_EducationSubjects_IndexController from "controllers/education/education_owner/education_subjects/index_controller";
import Education_EducationAdmin_AsideController from "controllers/education/education_admin/aside_controller";

export default class extends Education_EducationSchool_EducationSubjects_IndexController {

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationAdmin_AsideController
  }

}