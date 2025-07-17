class Seeding::CalendarService
  def self.run
    self.calendar_owners
    self.calendar_categories
    self.calendar_groups
    self.calendar_events
    self.calendar_category_appointments
  end

  def self.calendar_owners
    User.where(education_role: :education_owner).find_each do |user|
      CalendarOwner.create!(
        calendar_ownerable: user
      )
    end
  end

  def self.calendar_categories
    CalendarOwner.all.each do |calendar_owner|
      10.times do
        CalendarCategory.create!(
          name: "Category #{Faker::Number.number}",
          parent_category: [calendar_owner.calendar_categories.sample, nil].sample,
          calendar_owner: calendar_owner
        )
      end
    end
  end

  def self.calendar_groups
    CalendarOwner.find_each do |calendar_owner|
      10.times do
        calendar_group = CalendarGroup.create!(
          name: "Group #{Faker::Number.number}",
          calendar_owner: calendar_owner
        )
        CalendarCategoryAppointment.create!(
          calendar_category: calendar_owner.calendar_categories.sample,
          appoint_to: calendar_group
        )
      end
    end
  end

  def self.calendar_events
    CalendarOwner.find_each do |calendar_owner|
      calendar_owner.calendar_groups.each do |calendar_group|
        start_day = Faker::Date.between(from: Date.today, to: Date.today + 1.month)
        end_day = start_day + 1.hours
        10.times do |n|
          CalendarEvent.create!(
            calendar_owner: calendar_owner,
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
    end
  end

  def self.calendar_category_appointments
    CalendarOwner.find_each do |calendar_owner|
      calendar_owner.calendar_events.each do |calendar_event|
        CalendarCategoryAppointment.create!(
          calendar_category: calendar_owner.calendar_categories.sample,
          appoint_to: calendar_event
        )
      end
    end
  end

end
