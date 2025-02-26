FactoryBot.define do
  factory :education_room do
    association :education_school
    name { "Sample Room" }
    category { "Classroom" }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
