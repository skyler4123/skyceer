FactoryBot.define do
  factory :vehicle_car do
    name { "MyString" }
    model { "MyString" }
    vehicle_brand { nil }
    vehicle_user { nil }
    price { "9.99" }
    version { "MyString" }
    coordinates { "9.99" }
    released_at { "2024-05-04 17:50:19" }
    verified { false }
    expired { false }
  end
end
