class PaymentUser < ApplicationRecord
  belongs_to :payment_userable, polymorphic: true
  has_many :payment_method_appointments, dependent: :destroy
  has_many :payment_methods, through: :payment_method_appointments
end
