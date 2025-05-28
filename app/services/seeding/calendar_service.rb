class Seeding::CalendarService
  def self.run
    self.calendar_category
    self.calendar_event
    self.calendar_category_appointment
  end

  def self.calendar_category
    calendar_owners = User.where(education_role: :education_school)
    calendar_owners.each do |calendar_owner|
      10.times do
        CalendarCategory.create!(
          name: "Category #{Faker::Number.number}",
          parent_category: [CalendarCategory.all.sample, nil].sample,
          calendar_ownerable: calendar_owner
        )
      end
    end
  end

  def self.calendar_event
    school_users = User.where(education_role: :education_school)
    school_users.each do |school_user|
      education_schools = school_user.education_schools
      education_schools.all.each do |education_school|
        education_classes = education_school.education_classes
        education_classes.each do |education_class|
          calendar_owner = school_user
          calendar_group = education_class
          start_day = Faker::Date.between(from: Date.today, to: Date.today + 1.month)
          end_day = start_day + 1.hours
          10.times do |n|
            CalendarEvent.create!(
              calendar_ownerable: calendar_owner,
              calendar_groupable: calendar_group,
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
  end

  def self.calendar_category_appointment
    CalendarEvent.all.each do |calendar_event|
      calendar_owner = calendar_event.calendar_ownerable

      CalendarCategoryAppointment.create!(
        calendar_category: calendar_owner.calendar_categories.sample,
        appoint_to: calendar_event
      )
    end
  end

end
