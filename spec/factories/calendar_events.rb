# spec/factories/calendar_events.rb
FactoryBot.define do
  factory :calendar_event do
    association :calendar_owner
    association :calendar_group

    uid { SecureRandom.uuid }
    library { 0 }
    title { Faker::Lorem.sentence(word_count: 3) }
    body { Faker::Lorem.paragraph }
    isAllday { false }
    start { 1.hour.from_now }
    # end { 3.hours.from_now }
    goingDuration { rand(15..60) }
    comingDuration { rand(15..60) }
    location { Faker::Address.full_address }
    attendees { [ Faker::Internet.email, Faker::Internet.email ].to_json }
    # category { rand(0..5) }
    dueDateClass { %w[overdue today tomorrow this-week next-week].sample }
    recurrenceRule { nil }
    # state { rand(0..3) }
    isVisible { true }
    isPending { false }
    isFocused { false }
    isReadOnly { false }
    isPrivate { false }
    color { Faker::Color.hex_color }
    backgroundColor { Faker::Color.hex_color }
    dragBackgroundColor { Faker::Color.hex_color }
    borderColor { Faker::Color.hex_color }
    customStyle { { fontSize: '14px', fontWeight: 'bold' } }
    raw { { originalData: 'some data' } }
    discarded_at { nil }

    # trait :all_day do
    #   isAllday { true }
    #   start { Date.current.beginning_of_day }
    #   end { Date.current.end_of_day }
    # end

    trait :recurring_daily do
      recurrenceRule { 'FREQ=DAILY;INTERVAL=1' }
    end

    trait :recurring_weekly do
      recurrenceRule { 'FREQ=WEEKLY;INTERVAL=1;BYDAY=MO' }
    end

    trait :private_event do
      isPrivate { true }
    end

    trait :readonly do
      isReadOnly { true }
    end

    trait :pending do
      isPending { true }
    end

    trait :focused do
      isFocused { true }
    end

    trait :hidden do
      isVisible { false }
    end

    trait :discarded do
      discarded_at { 1.day.ago }
    end

    # trait :past_event do
    #   start { 2.hours.ago }
    #   end { 1.hour.ago }
    # end

    # trait :today_event do
    #   start { Date.current.beginning_of_day + 9.hours }
    #   end { Date.current.beginning_of_day + 10.hours }
    # end

    # trait :tomorrow_event do
    #   start { 1.day.from_now }
    #   end { 1.day.from_now + 1.hour }
    # end
  end
end
