import { identifier, transferToValue } from "controllers/education/helpers/data_helpers"
import Education_EducationSchool_EducationCourses_IndexController from "controllers/education/education_school/education_courses/index_controller";
import Education_EducationAdmin_AsideController from "controllers/education/education_admin/aside_controller";

export default class extends Education_EducationSchool_EducationCourses_IndexController {

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationAdmin_AsideController
  }

}