class PaymentMethod < ApplicationRecord
  has_many :payment_method_appointments, dependent: :destroy
  has_many :payment_users, through: :payment_method_appointments
  has_many :payment_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :payment_categories, through: :payment_category_appointments
  has_many :payment_logs, dependent: :destroy
  has_many :payment_orders, dependent: :destroy

end
