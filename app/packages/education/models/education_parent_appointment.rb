class EducationParentAppointment < ApplicationRecord
  belongs_to :education_parent
  belongs_to :appoint_to, polymorphic: true
end
