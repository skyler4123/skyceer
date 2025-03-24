class EducationSchoolAppointment < ApplicationRecord
  belongs_to :education_school
  belongs_to :appoint_to, polymorphic: true
end
