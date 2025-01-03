class EducationCategoryAppointment < ApplicationRecord
  belongs_to :education_category
  belongs_to :education_category_appointmentable, polymorphic: true
end
