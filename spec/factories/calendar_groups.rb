# spec/factories/calendar_groups.rb
FactoryBot.define do
  factory :calendar_group do
    association :calendar_owner
    
    name { Faker::Lorem.word }
    # description { Faker::Lorem.paragraph }
    color { Faker::Color.hex_color }
    # position { rand(1..100) }
    # status { rand(0..2) }
    discarded_at { nil }
    
    trait :discarded do
      discarded_at { 1.day.ago }
    end
    
    trait :active do
      status { 0 }
    end
    
    trait :inactive do
      status { 1 }
    end
    
    trait :archived do
      status { 2 }
    end
  end
end