class EducationClassAppointment < ApplicationRecord
  belongs_to :education_class
  belongs_to :education_class_appointmentable, polymorphic: true
end
