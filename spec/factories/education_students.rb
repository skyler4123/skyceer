FactoryBot.define do
  factory :education_student do
    association :user, factory: :user, optional: true
    name { "Student Name" }
    email { "student@example.com" }
    discarded_at { nil }

    # You can add more attributes and associations as needed
  end
end