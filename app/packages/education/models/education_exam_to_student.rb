class EducationExamToStudent < ApplicationRecord
  belongs_to :education_exam
  belongs_to :education_student
  belongs_to :education_exam_to_class

  enum :status, {
    pending: 0,
    completed: 1,
  }
  
  include EducationExamToStudent::ValidationConcern
end
