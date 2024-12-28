class PaymentInvoice < ApplicationRecord
  belongs_to :payment_order
  has_many :payment_logs, dependent: :destroy
  enum :status, { active: 0, inactive: 1, expired: 2, paid: 3 }
  enum :kind, { invoice: 0, receipt: 1 }
  
end
