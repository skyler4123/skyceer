class AutoGenerator::CalendarService
  def self.run
    User.all.each_with_index do |user, user_index|
      1.times do |n|
        calendar_group = CalendarGroup.create!(
          user: user,
          name: "user #{user_index} group #{n}",
          color: '#' + SecureRandom.hex(3),
          backgroundColor: '#' + SecureRandom.hex(3),
          dragBackgroundColor: '#' + SecureRandom.hex(3),
          borderColor: '#' + SecureRandom.hex(3),
        )
        2.times do |n|
          CalendarEvent.create!(
            calendar_group: calendar_group,
            lib: "tui",
            title: "#{Faker::Movie.title}",
            body: "#{Faker::Movie.quote}",
            isAllday: false,
            start: Time.now + user_index.days,
            end: Time.now + 1.hours + user_index.days,
            goingDuration: 0,
            comingDuration: 0,
            location: Address.create_random.id,
            attendees: [],
            category: ['milestone', 'task', 'time', 'allday'].sample,
            dueDateClass: "",
            recurrenceRule: "",
            state: ["Busy", "Free"].sample,
            isVisible: true,
            isPending: false,
            isFocused: false,
            isReadOnly: false,
            isPrivate: false,
            color: '#' + SecureRandom.hex(3),
            backgroundColor: '#' + SecureRandom.hex(3),
            dragBackgroundColor: '#' + SecureRandom.hex(3),
            borderColor: '#' + SecureRandom.hex(3),
            customStyle: {},
            raw: {},
          )
        end
      end
    end
  end
end
