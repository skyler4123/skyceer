FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "email#{n}@gmail.com" }
    password { "password1234" }
    password_confirmation { "password1234" }
    verified { true }
    sequence(:name) { |n| "user_name_#{n}" }
    role { :normal }
  end
end
