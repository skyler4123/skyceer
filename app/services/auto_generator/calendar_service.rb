class AutoGenerator::CalendarService
  def self.run
    self.calendar_event
    self.calendar_category
    self.calendar_category_appointment
  end

  def self.calendar_event
    userables = EducationSchool.all
    userables.each do |userable|
      eventables = userable.education_classes
      eventables.each do |eventable|
        # Get the current date
        current_date = Date.today
        # Get the first day of the current week (starting on Monday)
        first_day_of_week = current_date.beginning_of_week(:monday)

        5.times do |date_n|
          start_date = first_day_of_week + date_n.days
          5.times do |shift_n|
            start = start_date.midday + shift_n.hours
            CalendarEvent.create!(
              userable: userable,
              eventable: eventable,
              library: "tui",
              title: "#{Faker::Movie.title}",
              body: "#{Faker::Movie.quote}",
              isAllday: false,
              start: start,
              end: start + 45.minutes,
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

  def self.calendar_category
    userables = EducationSchool.all
    userables.each do |userable|
      10.times do
        CalendarCategory.create!(
          name: "Category #{Faker::Number.number}",
          parent_category: [CalendarCategory.all.sample, nil].sample,
          userable: userable
        )
      end
    end
  end

  def self.calendar_category_appointment
    userables = EducationSchool.all
    userables.each do |userable|
      userable.calendar_events.each do |calendar_event|
        CalendarCategoryAppointment.create!(
          calendar_category: userable.calendar_categories.sample,
          calendar_category_appointmentable: calendar_event
        )
      end
    end
  end

end
