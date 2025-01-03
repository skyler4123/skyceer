class EducationStudent < ApplicationRecord
  # include EducationStudent::AvatarConcern
  include EducationStudent::ImagesConcern
  include EducationStudent::ElasticsearchConcern

  belongs_to :user
  has_many :education_school_appointments, dependent: :destroy
  has_many :education_schools, through: :education_school_appointments

  has_many :education_exams, dependent: :destroy
  has_many :education_class_appointments, as: :education_class_appointmentable, dependent: :destroy
  has_many :education_classes, through: :education_class_appointments
  has_many :education_category_appointments, as: :education_category_appointmentable, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  def class_names
    self.education_classes.map(&:name).join(", ")
  end
  
  def avatar
    self.user.avatar_path
  end

  include EducationStudent::PaymentCustomerConcern
end
