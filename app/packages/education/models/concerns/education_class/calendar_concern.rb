module EducationClass::CalendarConcern
  extend ActiveSupport::Concern
  
  included do

    has_many :calendar_events, as: :groupable, dependent: :destroy
    
  end

end
