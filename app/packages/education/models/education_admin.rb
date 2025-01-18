class EducationAdmin < ApplicationRecord
  include EducationAdmin::ImagesConcern

  belongs_to :user, optional: true
  
  has_many :education_school_appointments, as: :education_school_appointmentable, dependent: :destroy
  has_many :education_schools, through: :education_school_appointments
end
