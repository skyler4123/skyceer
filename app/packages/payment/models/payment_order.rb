class PaymentOrder < ApplicationRecord
  belongs_to :payment_owner
  belongs_to :payment_customer
  belongs_to :payment_method
  belongs_to :payment_discount
  has_many :payment_logs, dependent: :destroy
  has_many :payment_item_appointments, dependent: :destroy
  has_many :payment_items, through: :payment_item_appointments
  has_many :payment_invoices, dependent: :destroy
  has_many :payment_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :payment_categories, through: :payment_category_appointments

  enum :status, { pending: 0, paid: 1, cancelled: 2, failed: 3, refunded: 4 }

  def customer_name
    payment_customer.name
  end

  include PaymentOrder::ValidationConcern
end
