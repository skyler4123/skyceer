FactoryBot.define do
  factory :education_teacher do
    association :user, factory: :user, optional: true
    name { "Teacher Name" }
    email { "teacher@example.com" }
    discarded_at { nil }

    # You can add more attributes and associations as needed
  end
end