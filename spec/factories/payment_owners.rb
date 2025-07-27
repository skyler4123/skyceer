FactoryBot.define do
  factory :payment_owner do
    payment_ownerable { create(:education_school) }
    name { Faker::Company.name }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
