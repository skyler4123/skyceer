module EducationSchool::CalendarConcern
  extend ActiveSupport::Concern
  
  included do

    has_one :calendar_user, as: :calendar_userable, dependent: :destroy
    
  end

end
