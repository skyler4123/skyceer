class EducationExamToClass < ApplicationRecord
  belongs_to :education_exam
  belongs_to :education_class
  belongs_to :education_subject

  has_many :education_exam_to_students, dependent: :destroy

  include EducationExamToClass::ValidationConcern
  include EducationExamToClass::AttributeConcern

end
