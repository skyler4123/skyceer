FactoryBot.define do
  factory :education_school do
    association :user, factory: :user, role: :normal, education_role: :education_school
    association :address
    name { "Sample School" }
    email { "school@example.com" }
    category { "Primary" }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
