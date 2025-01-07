module EducationSchool::CalendarConcern
  extend ActiveSupport::Concern
  
  included do

    has_many :calendar_events, as: :userable, dependent: :destroy
    has_many :calendar_categories, as: :userable, dependent: :destroy
    
  end

end
