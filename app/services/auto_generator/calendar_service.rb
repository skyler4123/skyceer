class AutoGenerator::CalendarService
  def self.run
    self.update_calendar_group
    self.update_calendar_event
    self.calendar_event_appointment
    self.calendar_category
    self.calendar_category_appointment
  end

  def self.update_calendar_group
    CalendarGroup.all.each do |calendar_group|
      seed_attributes = {
        name: "group #{SecureRandom.hex(3)}",
        color: '#' + SecureRandom.hex(3),
        backgroundColor: '#' + SecureRandom.hex(3),
        dragBackgroundColor: '#' + SecureRandom.hex(3),
        borderColor: '#' + SecureRandom.hex(3),
      }
      calendar_group.update!(seed_attributes)
    end
  end

  def self.update_calendar_event
    CalendarEvent.all.each do |calendar_event|
      seed_attributes = {
        library: "tui",
        title: "#{Faker::Movie.title}",
        body: "#{Faker::Movie.quote}",
        isAllday: false,
        start: Time.now,
        end: Time.now + 1.hours,
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
      }
      calendar_event.update!(seed_attributes)
    end
  end

  def self.calendar_event_appointment
    CalendarEvent.all.each do |calendar_event|
      CalendarEventAppointment.create!(
        calendar_event: calendar_event,
        calendar_event_appointmentable: calendar_event.calendar_user.calendar_groups.sample
      )
    end
  end

  def self.calendar_category
    CalendarUser.all.each do |calendar_user|
      10.times do
        CalendarCategory.create!(
          name: "Category #{Faker::Number.number}",
          parent_category: [CalendarCategory.all.sample, nil].sample,
          calendar_user: calendar_user
        )
      end
    end
  end

  def self.calendar_category_appointment
    CalendarUser.all.each do |calendar_user|
      calendar_user.calendar_groups.each do |calendar_group|
        CalendarCategoryAppointment.create!(
          calendar_category: calendar_user.calendar_categories.sample,
          calendar_category_appointmentable: calendar_group
        )
      end
      calendar_user.calendar_events.each do |calendar_event|
        CalendarCategoryAppointment.create!(
          calendar_category: calendar_user.calendar_categories.sample,
          calendar_category_appointmentable: calendar_event
        )
      end
    end
  end

end
