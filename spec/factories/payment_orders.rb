FactoryBot.define do
  factory :payment_order do
    association :payment_owner
    association :payment_customer
    association :payment_method
    association :payment_discount
    status { 1 }
    amount { 100.0 }
    paid { 50.0 }
    due { 50.0 }
    expire { Time.now + 30.days }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
