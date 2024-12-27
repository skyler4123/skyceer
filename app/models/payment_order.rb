class PaymentOrder < ApplicationRecord
  belongs_to :payment_method
  belongs_to :payment_discount
end
