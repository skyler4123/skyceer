FactoryBot.define do
  factory :education_exam_to_student do
    association :education_exam
    association :education_student
    association :education_exam_to_class
    answer { { question_1: "Answer A", question_2: "Answer B" } }
    score { 85.5 }
    status { 1 }
  end
end
