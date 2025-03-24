class EducationLesson < ApplicationRecord
  belongs_to :education_school
  belongs_to :education_class, optional: true
  belongs_to :education_subject, optional: true
  belongs_to :education_teacher, optional: true
  has_many :education_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  include EducationLesson::ValidationConcern
end
