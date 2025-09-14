FactoryBot.define do
  factory :education_exam_to_class do
    association :education_exam
    association :education_class
    association :education_subject
    uid { SecureRandom.uuid }
    name { "Exam Assignment" }
    description { "Assigning an exam to a class for a specific subject" }
    score { 85.5 }
    status { 0 } # Example: 0 = active, 1 = inactive
    discarded_at { nil } # Default to not discarded
  end
end
