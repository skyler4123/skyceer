FactoryBot.define do
  factory :education_question do
    association :education_school
    association :education_teacher
    question_type { 1 }
    title { "Sample Question" }
    content { "This is a sample question content." }
    anwser { "Sample Answer" }
    choice_1 { "Choice 1" }
    choice_2 { "Choice 2" }
    choice_3 { "Choice 3" }
    choice_4 { "Choice 4" }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
