FactoryBot.define do
  factory :demo do
    string { "MyString" }
    text { "MyText" }
    float { 1.5 }
    decimal { "9.99" }
    datetime { "2024-05-04 06:53:18" }
    time { "2024-05-04 06:53:18" }
    date { "2024-05-04" }
    binary { "" }
    boolean { false }
    json { "" }
  end
end
