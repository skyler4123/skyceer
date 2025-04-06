class PaymentMethodAppointment < ApplicationRecord
  belongs_to :payment_user
  belongs_to :payment_method

  include PaymentMethodAppointment::ValidationConcern
end
