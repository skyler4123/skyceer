module EducationSchool::PaymentCustomerConcern
  extend ActiveSupport::Concern
  
  included do
    has_one :payment_customer, as: :payment_customerable, dependent: :destroy

    after_create :create_payment_customer

    private

    def create_payment_customer
      PaymentCustomer.create!(payment_customerable: self)
    end
  end

end
