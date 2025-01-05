module EducationClass::CalendarGroupConcern
  extend ActiveSupport::Concern
  
  included do
    has_one :calendar_group, as: :calendar_groupable, dependent: :destroy
    
    after_create :create_calendar_group

    private

    def create_calendar_group
      CalendarGroup.create!(calendar_user: self.education_school.calendar_user, calendar_groupable: self, name: self.name)
    end
  end

end
