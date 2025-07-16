FactoryBot.define do
  factory :payment_owner do
    payment_ownerable { create(:education_school) }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
