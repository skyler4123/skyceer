class PaymentCategory < ApplicationRecord
  include CategoryConcern

  belongs_to :payment_owner

  has_many :payment_category_appointments, dependent: :destroy
  has_many :payment_customers, through: :payment_category_appointments, source: :appoint_to, source_type: "PaymentCustomer"
  has_many :payment_methods, through: :payment_category_appointments, source: :appoint_to, source_type: "PaymentMethod"
  has_many :payment_discounts, through: :payment_category_appointments, source: :appoint_to, source_type: "PaymentDiscount"
  has_many :payment_items, through: :payment_category_appointments, source: :appoint_to, source_type: "PaymentItem"
  has_many :payment_orders, through: :payment_category_appointments, source: :appoint_to, source_type: "PaymentOrder"
  has_many :payment_invoices, through: :payment_category_appointments, source: :appoint_to, source_type: "PaymentInvoice"

  include PaymentCategory::ValidationConcern
end
