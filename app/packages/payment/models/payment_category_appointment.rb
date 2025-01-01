class PaymentCategoryAppointment < ApplicationRecord
  belongs_to :payment_category
  belongs_to :payment_customer, optional: true
  belongs_to :payment_method, optional: true
  belongs_to :payment_discount, optional: true
  belongs_to :payment_item, optional: true
  belongs_to :payment_order, optional: true
  belongs_to :payment_invoice, optional: true
end
