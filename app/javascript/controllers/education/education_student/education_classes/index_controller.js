import Education_EducationSchool_EducationClasses_IndexController from "controllers/education/education_school/education_classes/index_controller";
import Education_EducationStudent_AsideController from "controllers/education/education_student/aside_controller";

export default class extends Education_EducationSchool_EducationClasses_IndexController {

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationStudent_AsideController
  }

}