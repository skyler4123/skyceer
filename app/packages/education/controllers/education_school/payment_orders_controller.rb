class EducationSchool::PaymentOrdersController < EducationSchool::EducationsController

  # GET /payment_orders or /payment_orders.json
  def index
    @payment_users = PaymentUser.where(payment_userable: @education_schools)
    @payment_orders = PaymentOrder.includes(payment_customer: :payment_customerable).where(payment_user: @payment_users)
    @pagy, @payment_orders = pagy(@payment_orders)
  end

end
