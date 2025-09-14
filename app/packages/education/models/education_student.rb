class EducationStudent < ApplicationRecord
  # include EducationStudent::AvatarConcern
  include EducationStudent::ImagesConcern

  belongs_to :education_owner
  belongs_to :user, optional: true
  belongs_to :education_school

  has_many :education_parent_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_parents, through: :education_parent_appointments
  has_many :education_class_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_classes, through: :education_class_appointments
  has_many :education_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments
  has_many :education_exam_to_students, dependent: :destroy
  has_many :education_exams, through: :education_exam_to_students

  def class_names
    self.education_classes.map(&:name).join(", ")
  end

  def avatar
    self.user.avatar_path
  end

  include EducationStudent::ValidationConcern
  include EducationStudent::UserConcern
end
