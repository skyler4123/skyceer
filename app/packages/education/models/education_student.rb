class EducationStudent < ApplicationRecord
  include EducationStudent::AvatarConcern
  include EducationStudent::ImagesConcern

  belongs_to :user
  belongs_to :education_school
end
