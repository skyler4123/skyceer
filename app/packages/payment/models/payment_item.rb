class PaymentItem < ApplicationRecord
  belongs_to :payment_user
  belongs_to :payment_itemable, polymorphic: true
  has_many :payment_item_appointments, dependent: :destroy
  has_many :payment_orders, through: :payment_item_appointments
  has_many :payment_category_appointments, as: :payment_category_appointmentable, dependent: :destroy
  has_many :payment_categories, through: :payment_category_appointments
end
