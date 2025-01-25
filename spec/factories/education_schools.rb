FactoryBot.define do
  factory :education_school do
    # education_user { nil }
    # have association with user
    # user { create(:user) }
    # name { "MyString" }
    association :user, factory: :user
    name { "MyString" }
  end
end
