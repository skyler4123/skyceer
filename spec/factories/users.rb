FactoryBot.define do
  factory :user do
    email { "email1@gmail.com" }
    password { "password" }
    password_confirmation { "password" }
  end
end
