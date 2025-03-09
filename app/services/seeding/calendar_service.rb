class Seeding::CalendarService
  def self.run
    self.calendar_group
    self.calendar_event
    self.calendar_category
    self.calendar_category_appointment
  end

  def self.calendar_group
    # For Education
    education_classes = EducationClass.all
    education_classes.each do |education_class|
      CalendarGroup.create!(
        calendar_userable: education_class.education_school,
        calendar_groupable: education_class,
        name: "Group #{Faker::Number.number}",
        color: '#' + SecureRandom.hex(3),
        borderColor: '#' + SecureRandom.hex(3),
        backgroundColor: '#' + SecureRandom.hex(3),
        dragBackgroundColor: '#' + SecureRandom.hex(3),
      )
    end
    # For Education
  end

  def self.calendar_event
    # For Education
    calendar_groups = CalendarGroup.all
    calendar_groups.each do |calendar_group|
      10.times do
        start_day = Faker::Date.between(from: Date.today, to: Date.today + 1.month)
        end_day = start_day + 1.hours
        CalendarEvent.create!(
          calendar_group: calendar_group,
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
    # For Education
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
    calendar_categories = CalendarCategory.all

    calendar_groups = CalendarGroup.all
    calendar_groups.each do |calendar_group|
      CalendarCategoryAppointment.create!(
        calendar_category: calendar_categories.sample,
        calendar_category_appointmentable: calendar_group
      )
    end
    calendar_events = CalendarEvent.all
    calendar_events.each do |calendar_event|
      CalendarCategoryAppointment.create!(
        calendar_category: calendar_categories.sample,
        calendar_category_appointmentable: calendar_event
      )
    end
  end

end
