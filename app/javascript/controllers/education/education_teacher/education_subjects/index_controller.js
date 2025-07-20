import Education_EducationOwner_EducationSubjects_IndexController from "controllers/education/education_owner/education_subjects/index_controller";
import Education_EducationTeacher_AsideController from "controllers/education/education_teacher/aside_controller";

export default class extends Education_EducationOwner_EducationSubjects_IndexController {

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationTeacher_AsideController
  }

}