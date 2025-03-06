FactoryBot.define do
  factory :payment_customer do
    payment_customerable { create(:education_student) }
    name { Faker::Name.name }
    email { Faker::Internet.email }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
