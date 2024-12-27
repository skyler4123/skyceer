class PaymentItem < ApplicationRecord
  belongs_to :payment_user
  belongs_to :payment_itemable, polymorphic: true
end
