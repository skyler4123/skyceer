FactoryBot.define do
  factory :education_room do
    association :education_owner
    association :education_school
    name { Faker::Name.name }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
