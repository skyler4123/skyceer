class PaymentOrder < ApplicationRecord
  belongs_to :payment_user
  belongs_to :payment_customer
  belongs_to :payment_method
  belongs_to :payment_discount
  has_many :payment_logs, dependent: :destroy
  has_many :payment_items, dependent: :destroy
  has_many :payment_invoices, dependent: :destroy
  
end
