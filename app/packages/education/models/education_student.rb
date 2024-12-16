class EducationStudent < ApplicationRecord
  include EducationStudent::AvatarConcern
  include EducationStudent::ImagesConcern

  has_many :education_exams, dependent: :destroy
  belongs_to :user
  belongs_to :education_school
end
