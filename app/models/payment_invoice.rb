class PaymentInvoice < ApplicationRecord
  belongs_to :payment_order
end
