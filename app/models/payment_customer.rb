class PaymentCustomer < ApplicationRecord
  belongs_to :user
  has_many :payment_orders, dependent: :destroy
  has_many :payment_logs, dependent: :destroy
  
end
