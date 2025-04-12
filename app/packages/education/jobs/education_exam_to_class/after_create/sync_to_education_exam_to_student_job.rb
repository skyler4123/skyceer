class EducationExamToClass::AfterCreate::SyncToEducationExamToStudentJob < ApplicationJob

  def perform(education_exam_to_class_ids)
    education_exam_to_classes = EducationExamToClass.where(id: education_exam_to_class_ids)
    education_exam_to_classes.each do |education_exam_to_class|
      education_exam = education_exam_to_class.education_exam
      education_class = education_exam_to_class.education_class
      education_students = education_class.education_students
      education_students.each do |education_student|
        EducationExamToStudent.find_or_create_by!(
          education_exam: education_exam,
          education_student: education_student,
          education_exam_to_class: education_exam_to_class,
          status: 0,
          # score: nil,
        )
      end
    end
  end

end
