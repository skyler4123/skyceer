module EducationSchool::CalendarConcern
  extend ActiveSupport::Concern
  
  included do

    has_many :calendar_events, as: :calendar_ownerable, dependent: :destroy
    
  end

end
