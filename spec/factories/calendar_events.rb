FactoryBot.define do
  factory :calendar_event do
    calendar_user { nil }
    name { "MyString" }
  end
end
