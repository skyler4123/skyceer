FactoryBot.define do
  factory :payment_item do
    association :payment_user
    payment_itemable { create(:education_course) }
    price { 50.0 }
    discarded_at { nil }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
