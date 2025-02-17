FactoryBot.define do
  factory :payment_user do
    payment_userable { create(:education_school) }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
