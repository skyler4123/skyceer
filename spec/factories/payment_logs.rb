FactoryBot.define do
  factory :payment_log do
    association :payment_user
    association :payment_customer
    association :payment_order
    association :payment_method
    association :payment_discount
    association :payment_invoice
    action { "Payment" }
    amount { 100.0 }
    note { Faker::Lorem.sentence }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
