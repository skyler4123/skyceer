class PaymentMethodAppointment < ApplicationRecord
  belongs_to :payment_user
  belongs_to :payment_method
end
