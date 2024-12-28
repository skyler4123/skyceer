class PaymentOrder < ApplicationRecord
  belongs_to :payment_user
  belongs_to :payment_customer
  belongs_to :payment_method
  belongs_to :payment_discount
  has_many :payment_logs, dependent: :destroy
  has_many :payment_item_appointments, dependent: :destroy
  has_many :payment_items, through: :payment_item_appointments
  has_many :payment_invoices, dependent: :destroy
  
end
