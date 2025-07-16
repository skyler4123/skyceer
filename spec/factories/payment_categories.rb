FactoryBot.define do
  factory :payment_category do
    association :payment_owner
    name { Faker::Name.name }
    parent_category_id { nil }
    nested_level { 0 }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
