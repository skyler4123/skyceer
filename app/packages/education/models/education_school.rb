class EducationSchool < ApplicationRecord
  include EducationSchool::AvatarConcern
  include EducationSchool::ImagesConcern

  belongs_to :user
  belongs_to :address, optional: true

  # has_many :education_school_appointments, dependent: :destroy
  # has_many :education_admins, through: :education_school_appointments, source: :appoint_to, source_type: 'EducationAdmin'
  # has_many :education_teachers, through: :education_school_appointments, source: :appoint_to, source_type: 'EducationTeacher'
  # has_many :education_students, through: :education_school_appointments, source: :appoint_to, source_type: 'EducationStudent'
  # has_many :education_parents, through: :education_school_appointments, source: :appoint_to, source_type: 'EducationParent'

  has_many :education_admins, dependent: :destroy
  has_many :education_teachers, dependent: :destroy
  has_many :education_students, dependent: :destroy
  has_many :education_parents, dependent: :destroy

  has_many :education_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  has_many :education_rooms, dependent: :destroy
  has_many :education_classes, dependent: :destroy
  has_many :education_courses, dependent: :destroy
  has_many :education_exams, dependent: :destroy
  has_many :education_questions, dependent: :destroy
  has_many :education_subjects, dependent: :destroy
  has_many :education_lessons, dependent: :destroy

  include EducationSchool::ValidationConcern
  include EducationSchool::PaymentConcern
  # include EducationSchool::CalendarConcern
  include EducationSchool::UserConcern
  include EducationSchool::ProjectConcern
end
