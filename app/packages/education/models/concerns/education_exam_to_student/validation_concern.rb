module EducationExamToStudent::ValidationConcern
  extend ActiveSupport::Concern
  
  included do
    validates :education_exam, presence: true
    validates :education_student, presence: true
    validates :education_exam_to_class, presence: true
    validate :unique_exam_student_within_class
  
    private
  
    def unique_exam_student_within_class
      if EducationExamToStudent.where(
           education_exam: education_exam,
           education_student: education_student,
           education_exam_to_class: education_exam_to_class
         ).where.not(id: id).exists?
        errors.add(:base, "An exam can only be assigned once to a student within the same class")
      end
    end
  end

end
