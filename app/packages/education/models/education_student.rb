class EducationStudent < ApplicationRecord
  # include EducationStudent::AvatarConcern
  include EducationStudent::ImagesConcern
  include EducationStudent::ElasticsearchConcern

  belongs_to :user, optional: true
  belongs_to :education_school_user, class_name: 'User'
  belongs_to :education_parent, optional: true

  has_many :education_school_appointments, as: :education_school_appointmentable, dependent: :destroy
  has_many :education_schools, through: :education_school_appointments

  has_many :education_class_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_classes, through: :education_class_appointments

  has_many :education_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  has_many :education_exam_appointments, as: :education_exam_appointmentable, dependent: :destroy
  has_many :education_exams, through: :education_exam_appointments

  def class_names
    self.education_classes.map(&:name).join(", ")
  end
  
  def avatar
    self.user.avatar_path
  end

  include EducationStudent::ValidationConcern
  include EducationStudent::PaymentConcern
  include EducationStudent::UserConcern
end
