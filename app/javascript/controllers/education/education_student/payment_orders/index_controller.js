import Education_EducationSchool_PaymentOrders_IndexController from "controllers/education/education_owner/payment_orders/index_controller";
import Education_EducationStudent_AsideController from "controllers/education/education_student/aside_controller";

export default class extends Education_EducationSchool_PaymentOrders_IndexController {

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationStudent_AsideController
  }

}