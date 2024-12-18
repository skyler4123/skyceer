class EducationClass < ApplicationRecord
  include EducationClass::AvatarConcern
  include EducationClass::ImagesConcern

  belongs_to :education_school

  has_many :education_class_student_appointments, dependent: :destroy
  has_many :education_students, through: :education_class_student_appointments
  has_many :education_class_teacher_appointments, dependent: :destroy
  has_many :education_teachers, through: :education_class_teacher_appointments
  has_many :education_class_subject_appointments, dependent: :destroy
  has_many :education_subjects, through: :education_class_subject_appointments
  has_many :education_class_room_appointments, dependent: :destroy
  has_many :education_rooms, through: :education_class_room_appointments
end
