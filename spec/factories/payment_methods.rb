FactoryBot.define do
  factory :payment_method do
    name { "Credit Card" }
    description { "Payment via credit card." }
    region { 1 }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
