FactoryBot.define do
  factory :education_parent do
    association :user, factory: :user
    association :education_school_user, factory: :user, role: :normal, education_role: :education_school

    name { Faker::Name.name }
    email { Faker::Internet.email }
    discarded_at { nil }
  end
end
