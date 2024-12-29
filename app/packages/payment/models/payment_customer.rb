class PaymentCustomer < ApplicationRecord
  belongs_to :payment_customerable, polymorphic: true
  has_many :payment_orders, dependent: :destroy
  has_many :payment_logs, dependent: :destroy
  
  def name
    payment_customerable.name
  end
end
