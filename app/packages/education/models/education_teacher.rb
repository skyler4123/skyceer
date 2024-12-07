class EducationTeacher < ApplicationRecord
  include EducationTeacher::AvatarConcern
  include EducationTeacher::ImagesConcern

  belongs_to :user
  belongs_to :education_school
end
