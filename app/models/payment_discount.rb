class PaymentDiscount < ApplicationRecord
  belongs_to :publisher, polymorphic: true
end
