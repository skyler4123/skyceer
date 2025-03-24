class EducationTeacher < ApplicationRecord
  # include EducationTeacher::AvatarConcern
  include EducationTeacher::ImagesConcern

  belongs_to :user, optional: true
  belongs_to :education_school_user, class_name: 'User'
  
  has_many :education_school_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_schools, through: :education_school_appointments

  has_many :education_questions, dependent: :destroy
  has_many :education_lessons, dependent: :destroy

  has_many :education_class_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_classes, through: :education_class_appointments
  has_many :education_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  has_many :education_subject_appointments, as: :appoint_from, dependent: :destroy
  has_many :education_subjects, through: :education_subject_appointments
  
  include EducationTeacher::ValidationConcern
  include EducationTeacher::UserConcern

  # Instance method to get all classes with subject appointments to this teacher
  def education_classes
    EducationClass.joins(:education_subject_appointments)
                  .where(education_subject_appointments: { appoint_from: self})
                  .distinct
  end
end
