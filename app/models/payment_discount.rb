class PaymentDiscount < ApplicationRecord
  belongs_to :payment_user
  has_many :payment_orders, dependent: :destroy
  has_many :payment_logs, dependent: :destroy
  enum status: { active: 0, inactive: 1, expired: 2, used: 3 }
  enum kind: { percentage: 0, nominal: 1, free: 2, discount: 3 }


end
