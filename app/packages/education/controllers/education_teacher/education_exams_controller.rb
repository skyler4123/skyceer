class EducationTeacher::EducationExamsController < EducationTeacher::EducationsController

  # GET /education_exams or /education_exams.json
  def index
    @education_classes = EducationClass.joins(:education_teacher).where(education_teachers: @education_teachers)
    @education_exams = EducationExam.joins(:education_classes).where(education_classes: @education_classes)
    @pagination, @education_exams = pagy(@education_exams)
    @data = {
      education_exams: @education_exams.as_json(only: %i[id education_school_id name description discarded_at created_at updated_at], include: { education_school: { only: %i[id name] } }),
    }.to_json
  end

end
