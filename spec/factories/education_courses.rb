FactoryBot.define do
  factory :education_course do
    association :education_owner
    association :education_school
    name { Faker::Name.name }
    description { Faker::Lorem.sentence }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
