class EducationRoom < ApplicationRecord
  include EducationRoom::AvatarConcern
  include EducationRoom::ImagesConcern

  belongs_to :education_school
end
