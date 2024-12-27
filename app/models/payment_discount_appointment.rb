class PaymentDiscountAppointment < ApplicationRecord
  belongs_to :payment_user
  belongs_to :payment_discount
end
