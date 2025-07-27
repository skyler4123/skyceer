FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "email#{n}@gmail.com" }
    password { "password1234" }
    password_confirmation { "password1234" }
    verified { true }
    name { Faker::Movies::HarryPotter.character }
    avatar { "https://flowbite.com/docs/images/people/profile-picture-5.jpg" }
    role { nil }
    education_role { nil }
    association :address
    
    trait :education_school do
      role { :normal }
      education_role { :education_school }
    end

    trait :with_education_school do
      after(:create) do |user|
        create(:education_school, user: user)
      end
    end
  end
end
