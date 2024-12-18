class EducationStudent < ApplicationRecord
  include EducationStudent::AvatarConcern
  include EducationStudent::ImagesConcern

  belongs_to :user
  belongs_to :education_school

  has_many :education_exams, dependent: :destroy
  has_many :education_class_student_appointments, dependent: :destroy
  has_many :education_class, through: :education_class_student_appointments
end
