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
    # debugger
    @education_exam_to_students = EducationExamToStudent.where(education_exam_to_class: @education_exam_to_class)

    @pagination, @education_students = pagy(@education_students)
    @json_data = {
      education_students: @education_students.as_json,
      education_exams: @education_exams.as_json,
      education_exam_to_class: @education_exam_to_class.as_json,
      education_exam_to_students: @education_exam_to_students.as_json,
      selection_education_classes: @selection_education_classes.as_json(include: [:education_subjects]),
    }.to_json
  end

  def import
    # debugger
    education_exam_to_student_ids = params[:education_exam_to_student][:ids]
    education_exam_to_student_scores = params[:education_exam_to_student][:scores]
    education_exam_to_students = EducationExamToStudent.where(id: education_exam_to_student_ids)
    redirect_to request.referer, alert: "Amount of scores does not match the number of students" if education_exam_to_students.size != education_exam_to_student_scores.size

    education_exam_to_student_ids.each_with_index do |education_exam_to_student_id, index|
      education_exam_to_student = education_exam_to_students.find { |education_exam_to_student| education_exam_to_student.id == education_exam_to_student_id }
      education_exam_to_student.update!(score: education_exam_to_student_scores[index])
    end
    # If all updates are successful, redirect to the previous page with a success message
    redirect_to request.referer, notice: UPDATED_SUCCESS_MESSAGE
  end
end
