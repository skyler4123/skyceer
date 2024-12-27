class PaymentLog < ApplicationRecord
  belongs_to :seller, polymorphic: true
  belongs_to :buyer, polymorphic: true
  belongs_to :payment_order
  belongs_to :payment_method
  belongs_to :payment_discount
  belongs_to :payment_invoice
end
