FactoryBot.define do
  factory :education_exam do
    association :education_school
    association :education_subject
    name { Faker::Name.name }
    description { Faker::Lorem.sentence }
    status { 1 }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
