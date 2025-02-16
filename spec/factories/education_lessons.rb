FactoryBot.define do
  factory :education_lesson do
    association :education_school
    association :education_class
    association :education_subject
    association :education_teacher
    title { "Sample Lesson" }
    content { "This is a sample lesson content." }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
