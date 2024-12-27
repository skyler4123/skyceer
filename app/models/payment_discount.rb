class PaymentDiscount < ApplicationRecord
  belongs_to :publisher, polymorphic: true
  has_one :payment_order
end
