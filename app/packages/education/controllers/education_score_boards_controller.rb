class EducationScoreBoardsController < EducationsController
  def index
    respond_to do |format|
      format.html { @education_classes = EducationClass.where(education_school: @education_schools) }
      format.json { 
        @education_classes = EducationClass.where(id: params[:education_class_id])
        @education_subjects = EducationSubject.where(id: params[:education_subject_id])
        @education_students = EducationStudent.joins(:education_classes).where(education_classes: @education_classes)
        @education_exams = EducationExam.joins(:education_classes).where(education_classes: @education_classes, education_subject: @education_subjects)
        @education_exam_appointments = EducationExamAppointment.joins(:education_exam).where(education_exam: @education_exams)
        render json: { education_students: @education_students, education_exams: @education_exams, education_exam_appointments: @education_exam_appointments }
      }
    end
  end
end
