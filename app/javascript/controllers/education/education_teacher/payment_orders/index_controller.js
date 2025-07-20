import Education_EducationOwner_PaymentOrders_IndexController from "controllers/education/education_owner/payment_orders/index_controller";
import Education_EducationTeacher_AsideController from "controllers/education/education_teacher/aside_controller";

export default class extends Education_EducationOwner_PaymentOrders_IndexController {

  initBinding() {
    super.initBinding()
    this.asideController = Education_EducationTeacher_AsideController
  }

}