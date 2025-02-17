FactoryBot.define do
  factory :payment_discount do
    association :payment_user
    name { "Sample Discount" }
    description { "This is a sample discount description." }
    code { "DISCOUNT2025" }
    expire { Time.now + 30.days }
    amount { 10.0 }
    status { 1 }
    kind { 1 }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
