class EducationStudent::EducationSchoolsController < EducationStudent::EducationsController

  # GET /education_schools or /education_schools.json
  def index
    @pagination, @education_schools = pagy(@education_schools)
    @data = {
      education_schools: @education_schools.as_json(include: [:user, :address]),
    }.to_json
  end

end
