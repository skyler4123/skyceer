class PaymentItemAppointment < ApplicationRecord
  belongs_to :payment_item
  belongs_to :payment_order

  include PaymentItemAppointment::ValidationConcern
end
