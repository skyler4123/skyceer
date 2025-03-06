FactoryBot.define do
  factory :payment_invoice do
    association :payment_order
    transaction_id { Faker::Number.number(digits: 10) }
    status { 1 }
    amount { 100.0 }
    tax_code { Faker::Code.asin }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
