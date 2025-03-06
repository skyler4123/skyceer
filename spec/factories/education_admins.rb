FactoryBot.define do
  factory :education_admin do
    association :user, factory: :user, role: :normal, education_role: :education_admin
    name { Faker::Name.name }
    email { Faker::Internet.email }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
