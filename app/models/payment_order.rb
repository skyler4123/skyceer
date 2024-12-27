class PaymentOrder < ApplicationRecord
  belongs_to :seller, polymorphic: true
  belongs_to :buyer, polymorphic: true
  belongs_to :payment_method
  belongs_to :payment_discount, optional: true
end
