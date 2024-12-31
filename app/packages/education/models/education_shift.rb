class EducationShift < ApplicationRecord
  belongs_to :education_school
  belongs_to :education_class
  belongs_to :education_subject
  belongs_to :education_teacher
  has_many :education_category_appointments, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  include EducationShift::CalendarEventConcern

end
