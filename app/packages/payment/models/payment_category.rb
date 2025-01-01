class PaymentCategory < ApplicationRecord
  include CategoryConcern
  
  belongs_to :payment_user

  has_many :payment_category_appointments, dependent: :destroy
  has_many :payment_customers, through: :payment_category_appointments
  has_many :payment_methods, through: :payment_category_appointments
  has_many :payment_discounts, through: :payment_category_appointments
  has_many :payment_items, through: :payment_category_appointments
  has_many :payment_orders, through: :payment_category_appointments
  has_many :payment_invoices, through: :payment_category_appointments

end
