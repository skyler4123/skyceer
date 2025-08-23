FactoryBot.define do
  factory :address do
    alpha2 { "US" }
    alpha3 { "USA" }
    continent { "North America" }
    nationality { "American" }
    region { "California" }
    subdivision { "Los Angeles" }
    longitude { -118.2437 }
    latitude { 34.0522 }
    level_total { 1 }
    level_1 { "Level 1" }
    level_2 { "Level 2" }
    level_3 { "Level 3" }
    level_4 { "Level 4" }
    level_5 { "Level 5" }
    level_6 { "Level 6" }
    level_7 { "Level 7" }
    level_8 { "Level 8" }
    level_9 { "Level 9" }
    level_10 { "Level 10" }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
