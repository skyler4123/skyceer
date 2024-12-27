class PaymentUser < ApplicationRecord
  belongs_to :payment_userable, polymorphic: true
  has_many :payment_method_appointments, dependent: :destroy
  has_many :payment_methods, through: :payment_method_appointments
  has_many :payment_discounts, as: :publisher, dependent: :destroy
  has_many :payment_orders, as: :seller, dependent: :destroy
end
