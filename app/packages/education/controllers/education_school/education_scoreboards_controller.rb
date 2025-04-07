class EducationSchool::EducationScoreboardsController < EducationSchool::EducationsController
  def index
    # @selection_education_classes = Rails.cache.fetch("selection_education_classes/#{@education_schools.cache_key_with_version}", expires_in: 5.minutes) do
    #   EducationClass.where(education_school: @education_schools).to_a
    # end
    @selection_education_classes = EducationClass.where(education_school: @education_schools)
    @education_class = EducationClass.where(id: params[:education_class_id])
    @education_subject = EducationSubject.where(id: params[:education_subject_id])
    @education_students = EducationStudent.joins(:education_classes).where(education_classes: @education_class)
    @education_exams = EducationExam.joins(:education_classes, :education_subject).where(education_classes: @education_class, education_subject: @education_subject)
    @education_exam_to_class = EducationExamToClass.where(education_exam: @education_exams, education_class: @education_class)
    @education_exam_to_students = EducationExamToStudent.where(education_exam_to_class: @education_exam_to_class)

    debugger
    @pagination, @education_students = pagy(@education_students)
    @data = {
      education_students: @education_students.as_json,
      education_exams: @education_exams.as_json,
      # education_exam_appointments: @education_exam_appointments.as_json,
      selection_education_classes: @selection_education_classes.as_json(include: [:education_subjects]),
    }.to_json
  end
end
