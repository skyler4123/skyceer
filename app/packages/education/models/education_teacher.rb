class EducationTeacher < ApplicationRecord
  include EducationTeacher::AvatarConcern
  include EducationTeacher::ImagesConcern

  has_many :education_questions, dependent: :destroy
  belongs_to :user
  belongs_to :education_school

  validates :user_id, uniqueness: { scope: :education_school_id, message: "This Teacher already have in this School" }
end
