FactoryBot.define do
  factory :education_subject do
    association :education_school
    name { "Sample Subject" }
    description { "This is a sample subject description." }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
