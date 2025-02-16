FactoryBot.define do
  factory :education_course do
    association :education_school
    name { "Sample Course" }
    description { "This is a sample course description." }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
