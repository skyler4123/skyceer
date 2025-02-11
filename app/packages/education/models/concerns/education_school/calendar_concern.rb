module EducationSchool::CalendarConcern
  extend ActiveSupport::Concern
  
  included do

    has_many :calendar_groups, as: :calendar_userable, dependent: :destroy
    
  end

end
