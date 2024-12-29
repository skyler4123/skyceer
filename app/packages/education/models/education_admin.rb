class EducationAdmin < ApplicationRecord
  include EducationAdmin::ImagesConcern

  belongs_to :user
  has_many :education_school_appointments, dependent: :destroy
  has_many :education_schools, through: :education_school_appointments
end
