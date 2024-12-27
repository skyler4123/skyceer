class PaymentLog < ApplicationRecord
  belongs_to :payment_user
  belongs_to :payment_customer
  belongs_to :payment_order
  belongs_to :payment_method
  belongs_to :payment_discount
  belongs_to :payment_invoice
end
