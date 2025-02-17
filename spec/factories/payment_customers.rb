FactoryBot.define do
  factory :payment_customer do
    payment_customerable { create(:education_student) }
    name { "Sample Customer" }
    email { "customer@example.com" }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
