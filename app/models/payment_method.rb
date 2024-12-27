class PaymentMethod < ApplicationRecord
  has_many :payment_method_appointments, dependent: :destroy
  has_many :payment_orders, through: :payment_method_appointments
end
