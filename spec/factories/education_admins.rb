FactoryBot.define do
  factory :education_admin do
    association :user, factory: :user, optional: true
    name { "Admin Name" }
    email { "admin@example.com" }

    # You can add more attributes and associations as needed
  end
end