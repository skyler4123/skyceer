class EducationExamToClass < ApplicationRecord
  belongs_to :education_exam
  belongs_to :education_class

  has_many :education_exam_to_students, dependent: :destroy

  include EducationExamToClass::ValidationConcern
end
