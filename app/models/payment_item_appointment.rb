class PaymentItemAppointment < ApplicationRecord
  belongs_to :seller, polymorphic: true
  belongs_to :payment_item
  belongs_to :payment_order
end
