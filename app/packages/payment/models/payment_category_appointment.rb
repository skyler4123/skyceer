class PaymentCategoryAppointment < ApplicationRecord
  belongs_to :payment_category
  belongs_to :appoint_to, polymorphic: true
end
