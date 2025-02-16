FactoryBot.define do
  factory :education_student do
    association :user
    name { "Sample Student" }
    email { "student@example.com" }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
