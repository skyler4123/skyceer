class PaymentMethodAppointment < ApplicationRecord
  belongs_to :payment_owner
  belongs_to :payment_method

  include PaymentMethodAppointment::ValidationConcern
end
