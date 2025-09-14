class EducationStudent::PaymentOrdersController < EducationStudent::EducationsController
  # GET /payment_orders or /payment_orders.json
  def index
    @payment_owners = PaymentOwner.where(payment_ownerable: @education_schools)
    @payment_orders = PaymentOrder.includes(payment_customer: :payment_customerable).where(payment_owner: @payment_owners)
    @pagination, @payment_orders = pagy(@payment_orders)

    @json_data = {
      payment_orders: @payment_orders.as_json(include: { payment_customer: { include: :payment_customerable }, payment_owner: { include: :payment_ownerable } })
    }.to_json
  end
end
