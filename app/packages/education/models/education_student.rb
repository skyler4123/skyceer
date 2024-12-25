class EducationStudent < ApplicationRecord
  include EducationStudent::AvatarConcern
  include EducationStudent::ImagesConcern

  belongs_to :user
  belongs_to :education_school

  has_many :education_exams, dependent: :destroy
  has_many :education_class_appointments, dependent: :destroy
  has_many :education_classes, through: :education_class_appointments
  has_many :education_category_appointments, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  def school_name
    self.education_school.name
  end

  def class_names
    self.education_classes.pluck(:name).join(", ")
  end
end
