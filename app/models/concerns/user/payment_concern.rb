module User::PaymentConcern
  extend ActiveSupport::Concern
  
  included do
    def payment_orders
      education_schools = self.education_schools
      payment_users = PaymentUser.where(payment_userable: education_schools)
      payment_orders = PaymentOrder.where(payment_user: payment_users)
    end
  end
end
