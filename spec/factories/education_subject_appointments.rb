FactoryBot.define do
  factory :education_subject_appointment do
    association :education_subject
    association :education_class
    association :education_teacher
    name { "Appointment Name" }
    description { "Appointment Description" }
    status { 0 }
    start_at { Time.now }
    end_at { Time.now + 1.hour }
  end
end
