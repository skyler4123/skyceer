FactoryBot.define do
  factory :education_exam do
    association :education_school
    association :education_subject
    name { "Sample Exam" }
    description { "This is a sample exam description." }
    status { 1 }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
