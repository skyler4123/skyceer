module EducationSchool::CalendarUserConcern
  extend ActiveSupport::Concern
  
  included do
    has_one :calendar_user, as: :calendar_userable, dependent: :destroy
    
    after_create :create_calendar_user

    private

    def create_calendar_user
      CalendarUser.create!(calendar_userable: self)
    end
  end

end
