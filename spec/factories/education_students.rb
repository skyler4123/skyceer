FactoryBot.define do
  factory :education_student do
    association :user, factory: :user, role: :normal, education_role: :education_student
    # association :education_school_user, factory: :user, role: :normal, education_role: :education_school

    name { Faker::Name.name }
    email { Faker::Internet.email }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
