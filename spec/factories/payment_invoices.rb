FactoryBot.define do
  factory :payment_invoice do
    association :payment_order
    transaction_id { "TXN123456" }
    status { 1 }
    amount { 100.0 }
    tax_code { "TAX2025" }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
