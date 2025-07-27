FactoryBot.define do
  factory :education_category do
    association :education_owner
    name { Faker::Name.name }
    parent_category_id { nil }
    nested_level { 0 }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
