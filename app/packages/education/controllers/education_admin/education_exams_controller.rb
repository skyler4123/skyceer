class EducationAdmin::EducationExamsController < EducationAdmin::EducationsController
  # GET /education_exams or /education_exams.json
  def index
    @education_exams = EducationExam.where(education_school: @education_schools)
    @pagination, @education_exams = pagy(@education_exams)
    @json_data = {
      education_exams: @education_exams.as_json(only: %i[id education_school_id name description discarded_at created_at updated_at], include: { education_school: { only: %i[id name] } })
    }.to_json
  end
end
