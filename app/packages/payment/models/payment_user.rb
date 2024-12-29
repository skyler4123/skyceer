class PaymentUser < ApplicationRecord
  belongs_to :payment_userable, polymorphic: true
  has_many :payment_method_appointments, dependent: :destroy
  has_many :payment_methods, through: :payment_method_appointments
  has_many :payment_discounts, dependent: :destroy
  has_many :payment_orders, dependent: :destroy
  has_many :payment_items, dependent: :destroy
  has_many :payment_logs, dependent: :destroy
end
