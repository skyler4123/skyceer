FactoryBot.define do
  factory :map_point do
    coordinates { "9.99" }
    mapable { nil }
    map_user { nil }
    verified { false }
    expired { false }
  end
end
