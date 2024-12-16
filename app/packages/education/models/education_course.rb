class EducationCourse < ApplicationRecord
    include EducationCourse::AvatarConcern
    include EducationCourse::ImagesConcern
  
    belongs_to :education_school
  end
  