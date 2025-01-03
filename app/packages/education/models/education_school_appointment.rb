class EducationSchoolAppointment < ApplicationRecord
  belongs_to :education_school
  belongs_to :education_school_appointmentable, polymorphic: true
end
