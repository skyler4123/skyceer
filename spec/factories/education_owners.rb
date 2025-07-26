FactoryBot.define do
  factory :education_owner do
    # association :user, factory: :user, role: :normal, education_role: :education_admin
    association :education_ownerable, factory: :user, role: :normal, education_role: :education_owner
    name { Faker::Name.name }
    email { Faker::Internet.email }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
