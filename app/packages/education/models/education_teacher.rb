class EducationTeacher < ApplicationRecord
  include EducationTeacher::AvatarConcern
  include EducationTeacher::ImagesConcern

  belongs_to :user
end
