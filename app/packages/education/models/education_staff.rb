class EducationStaff < ApplicationRecord
  # include EducationStudent::AvatarConcern
  include EducationStaff::ImagesConcern

  belongs_to :education_owner
  belongs_to :user, optional: true
  belongs_to :education_school

  has_many :education_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments

  include EducationStaff::ProjectConcern
end
