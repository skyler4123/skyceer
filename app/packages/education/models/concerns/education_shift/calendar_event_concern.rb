module EducationShift::CalendarEventConcern
  extend ActiveSupport::Concern
  
  # included do
  #   has_one :calendar_event, as: :calendar_eventable, dependent: :destroy
    
  #   after_create :create_calendar_event

  #   private

  #   def create_calendar_event
  #     CalendarEvent.create!(calendar_user: self.education_school.calendar_user, calendar_eventable: self)
  #   end
  # end

end
