class EducationCategoryAppointment < ApplicationRecord
  belongs_to :education_category
  belongs_to :appoint_to, polymorphic: true
end
