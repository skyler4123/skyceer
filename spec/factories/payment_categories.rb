FactoryBot.define do
  factory :payment_category do
    association :payment_user
    name { "Sample Category" }
    parent_category_id { nil }
    nested_level { 0 }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
