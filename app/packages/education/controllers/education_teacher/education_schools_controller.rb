class EducationTeacher::EducationSchoolsController < EducationTeacher::EducationsController

  # GET /education_schools or /education_schools.json
  def index
    @education_schools = EducationSchool.joins(:education_teachers).where(education_teachers: @education_teachers)
    @pagination, @education_schools = pagy(@education_schools)
    @json_data = {
      education_schools: @education_schools.as_json(include: [:user, :address]),
    }.to_json
  end

end
