class PaymentCategoryAppointment < ApplicationRecord
  belongs_to :payment_category
  belongs_to :payment_category_appointmentable, polymorphic: true
end
