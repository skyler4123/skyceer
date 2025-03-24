class Seeding::CalendarService
  def self.run
    # self.calendar_group
    self.calendar_event
    self.calendar_category
    self.calendar_category_appointment
  end

  def self.calendar_event
    calendar_userables = User.where(education_role: :education_school)
    calendar_userables.each do |calendar_userable|
      calendar_groupables = EducationClass.where(education_school: calendar_userable.education_schools)
      calendar_groupables.each do |calendar_groupable|
        10.times do
          start_day = Faker::Date.between(from: Date.today, to: Date.today + 1.month)
          end_day = start_day + 1.hours
          CalendarEvent.create!(
            calendar_userable: calendar_userable,
            calendar_groupable: calendar_groupable,
            library: "tui",
            title: "#{Faker::Movie.title}",
            body: "#{Faker::Movie.quote}",
            isAllday: false,
            start: start_day,
            end: end_day,
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

  def self.calendar_category
    calendar_userables = User.where(education_role: :education_school)
    calendar_userables.each do |calendar_userable|
      10.times do
        CalendarCategory.create!(
          name: "Category #{Faker::Number.number}",
          parent_category: [CalendarCategory.all.sample, nil].sample,
          calendar_userable: calendar_userable
        )
      end
    end
  end

  def self.calendar_category_appointment
    calendar_userables = User.where(education_role: :education_school)
    calendar_userables.each do |calendar_userable|
      calendar_events = CalendarEvent.where(calendar_userable: calendar_userable)
      calendar_categories = CalendarCategory.where(calendar_userable: calendar_userable)
      calendar_events.each do |calendar_event|
        CalendarCategoryAppointment.create!(
          calendar_category: calendar_categories.sample,
          appoint_to: calendar_event
        )
      end
    end
  end

end
