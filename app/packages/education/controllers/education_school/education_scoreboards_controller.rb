class EducationSchool::EducationScoreboardsController < EducationSchool::EducationsController
  def index
    @education_classes_for_select = EducationClass.where(education_school: @education_schools)
    # @education_subjects_for_select = EducationSubject.where(education_school: @education_schools)

    @education_classes = EducationClass.where(id: params[:education_class_id])
    @education_subjects = EducationSubject.where(id: params[:education_subject_id])
    @education_students = EducationStudent.joins(:education_classes).where(education_classes: @education_classes)
    @education_exams = EducationExam.joins(:education_classes).where(education_classes: @education_classes, education_subject: @education_subjects)
    @education_exam_appointments = EducationExamAppointment.joins(:education_exam).where(education_exam: @education_exams)
    @pagination, @education_students = pagy(@education_students)
    @data = {
      education_students: @education_students.as_json,
      education_exams: @education_exams.as_json,
      education_exam_appointments: @education_exam_appointments.as_json,
      selection_education_classes: @education_classes_for_select.as_json(include: [:education_subjects]),
      # selection_education_subjects: @education_subjects_for_select.as_json
    }.to_json
  end
end
