import Education_EducationAdmin_AsideController from "controllers/education/education_admin/aside_controller";
import Education_EducationOwner_EducationStudents_IndexController from "controllers/education/education_owner/education_students/index_controller";

export default class extends Education_EducationOwner_EducationStudents_IndexController {

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationAdmin_AsideController
  }

}