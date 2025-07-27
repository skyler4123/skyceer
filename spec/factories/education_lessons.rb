FactoryBot.define do
  factory :education_lesson do
    association :education_owner
    association :education_school
    association :education_class
    association :education_subject
    association :education_teacher
    title { Faker::Name.name }
    content { Faker::Lorem.sentence }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
