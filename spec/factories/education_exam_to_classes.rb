FactoryBot.define do
  factory :education_exam_to_class do
    association :education_exam
    association :education_class
    name { "Exam Assignment" }
    description { "Assigning exam to class" }
    score { 100 }
    status { 1 }
  end
end