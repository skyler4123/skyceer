class EducationAdmin < ApplicationRecord
  include EducationAdmin::ImagesConcern

  belongs_to :user
  # belongs_to :education_school_user, class_name: 'User'
  belongs_to :education_school

  # has_many :education_school_appointments, as: :appoint_to, dependent: :destroy
  # has_many :education_schools, through: :education_school_appointments

  has_many :education_category_appointments, as: :appoint_to, dependent: :destroy
  has_many :education_categories, through: :education_category_appointments
  
  include EducationAdmin::ValidationConcern
  include EducationAdmin::UserConcern
  # include EducationAdmin::ElasticsearchConcern
end
