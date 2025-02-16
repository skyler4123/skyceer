FactoryBot.define do
  factory :education_category do
    association :education_school
    name { "Sample Category" }
    parent_category_id { nil }
    nested_level { 0 }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
