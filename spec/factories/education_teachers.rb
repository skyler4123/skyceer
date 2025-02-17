FactoryBot.define do
  factory :education_teacher do
    association :user, factory: :user, role: :normal, education_role: :education_teacher
    name { "Sample Teacher" }
    email { "teacher@example.com" }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
