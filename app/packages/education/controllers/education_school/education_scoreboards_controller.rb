class EducationSchool::EducationScoreboardsController < EducationSchool::EducationsController
  def index
    # @education_classes_for_select = Rails.cache.fetch("education_classes_for_select/#{@education_schools.cache_key_with_version}", expires_in: 5.minutes) do
    #   EducationClass.where(education_school: @education_schools).to_a
    # end
    @education_classes_for_select = EducationClass.where(education_school: @education_schools)
    @education_subjects_for_select = EducationSubject.where(education_school: @education_schools)
    @education_class = EducationClass.where(id: params[:education_class_id])
    @education_subject = EducationSubject.where(id: params[:education_subject_id])
    @education_students = EducationStudent.joins(:education_classes).where(education_classes: @education_class)
    @education_exams = EducationExam.joins(:education_classes).where(education_classes: @education_class, education_subject: @education_subject)
    @education_exam_appointments = EducationExamAppointment.joins(:education_exam).where(education_exam: @education_exams, appoint_to: @education_students)
    @pagination, @education_students = pagy(@education_students)
    @data = {
      education_students: @education_students.as_json,
      education_exams: @education_exams.as_json,
      education_exam_appointments: @education_exam_appointments.as_json,
      selection_education_classes: @education_classes_for_select.as_json(include: [:education_subjects]),
    }.to_json
  end
end
