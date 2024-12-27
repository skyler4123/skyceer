class PaymentUser < ApplicationRecord
  belongs_to :payment_userable, polymorphic: true
end
