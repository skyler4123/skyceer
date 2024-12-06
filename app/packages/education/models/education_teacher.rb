class EducationTeacher < ApplicationRecord
  include EducationTeacher::AvatarConcern
  include EducationTeacher::ImagesConcern

  belongs_to :user
  belongs_to :education_school

  validates :user_id, uniqueness: { scope: :education_school_id, message: "should only one per school" }
end
