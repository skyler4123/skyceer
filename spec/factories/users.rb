FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "email#{n}@gmail.com" }
    password { "password1234" }
    password_confirmation { "password1234" }
    verified { true }
    name { Faker::Movies::HarryPotter.character }
    role { :normal }
  end
end
