class EducationClass < ApplicationRecord
  include EducationClass::AvatarConcern
  include EducationClass::ImagesConcern

  belongs_to :education_school
end
