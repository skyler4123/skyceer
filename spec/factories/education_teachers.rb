FactoryBot.define do
  factory :education_teacher do
    association :user
    name { "Sample Teacher" }
    email { "teacher@example.com" }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
