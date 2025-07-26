# spec/factories/calendar_owners.rb
FactoryBot.define do
  factory :calendar_owner do
    association :calendar_ownerable, factory: :user
    
    uid { SecureRandom.uuid }
    name { Faker::Name.name }
    email { Faker::Internet.email }
    discarded_at { nil }
    
    trait :discarded do
      discarded_at { 1.day.ago }
    end
    
    trait :with_education_owner do
      association :calendar_ownerable, factory: :education_owner
    end
  end
end