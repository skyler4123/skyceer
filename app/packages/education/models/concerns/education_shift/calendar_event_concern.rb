module EducationShift::CalendarEventConcern
  extend ActiveSupport::Concern
  
  included do
    has_one :calendar_event, as: :calendar_eventable, dependent: :destroy
    
    after_create :create_calendar_event

    private

    # Create calendar event when shift is created
    def create_calendar_event
      EducationShift::CreateCalendarEventJob.perform_later(self.id)
    end
  end

end
