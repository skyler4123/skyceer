FactoryBot.define do
  factory :education_class do
    association :education_school
    association :education_course
    name { "Sample Class" }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
