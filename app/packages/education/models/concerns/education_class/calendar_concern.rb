module EducationClass::CalendarConcern
  extend ActiveSupport::Concern
  
  included do

    has_many :calendar_groups, as: :calendar_groupable, dependent: :destroy
    
  end

end
