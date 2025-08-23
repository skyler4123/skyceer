class EducationTeacher::EducationSubjectsController < EducationTeacher::EducationsController
  # GET /education_subjects or /education_subjects.json
  def index
    @education_subjects = EducationSubject.joins(:education_teachers).where(education_teachers: @education_teachers)
    @pagination, @education_subjects = pagy(@education_subjects)
    @json_data = {
      education_subjects: @education_subjects.as_json(only: %i[id education_school_id name description discarded_at created_at updated_at], include: { education_school: { only: %i[id name] } })
    }.to_json
  end
end
