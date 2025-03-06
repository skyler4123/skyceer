FactoryBot.define do
  factory :payment_method do
    name { Faker::Name.name }
    description { Faker::Lorem.sentence }
    region { 1 }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
