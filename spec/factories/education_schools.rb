FactoryBot.define do
  factory :education_school do
    association :user
    association :address
    name { "Sample School" }
    email { "school@example.com" }
    category { "Primary" }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end