class PaymentCustomer < ApplicationRecord
  belongs_to :payment_customerable, polymorphic: true
  has_many :payment_orders, dependent: :destroy
  has_many :payment_logs, dependent: :destroy

  has_many :payment_category_appointments, as: :payment_category_appointmentable, dependent: :destroy
  has_many :payment_categories, through: :payment_category_appointments
  def name
    payment_customerable.name
  end
end
