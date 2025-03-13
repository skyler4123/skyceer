class EducationStudent::PaymentOrdersController < EducationStudent::EducationsController

  # GET /payment_orders or /payment_orders.json
  def index
    @payment_users = PaymentUser.where(payment_userable: @education_schools)
    @payment_orders = PaymentOrder.includes(payment_customer: :payment_customerable).where(payment_user: @payment_users)
    @pagination, @payment_orders = pagy(@payment_orders)
    
    @data = {
      payment_orders: @payment_orders.as_json(include: {payment_customer: {include: :payment_customerable}, payment_user: {include: :payment_userable}})
    }.to_json
  end

end
